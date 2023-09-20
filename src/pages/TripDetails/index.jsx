import React, { useEffect } from 'react';
import { Container, CardArea, InvoiceArea } from './styles';
import { Header } from '../../components/Header';
import { ValueCard } from '../../components/ValueCard';
import { DateTimeCard } from '../../components/DateTimeCard';
import { Invoice } from '../../components/Invoice';
import { Title } from '../../components/Title';
import { SubTitle } from '../../components/SubTitle';
import { Modal } from '../../components/Modal';
import { Loader } from '../../components/Loader';
import { formatDate } from '../../utils/formatDate';
import { compareDate } from '../../utils/dateDiff';
import { api } from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import mapIcon from '../../assets/Map.png';
import walletIcon from '../../assets/Wallet.png';
import { FaTrashCan, FaTriangleExclamation } from 'react-icons/fa6';
import Notification from '../../components/Notification'; // Importe o componente Notification

export function TripDetails() {
  const params = useParams();
  const [loading, setLoading] = React.useState(true);
  const [invoices, setInvoices] = React.useState([]);
  const [dateLeft, setDateLeft] = React.useState();
  const [dateReturn, setDateReturn] = React.useState();
  const [totalValue, setTotalValue] = React.useState(0);
  const [amountSpend, setAmountSpend] = React.useState(0);
  const [tripData, setTripData] = React.useState();
  const [showModal, setShowModal] = React.useState(false);
  const [userResponse, setUserResponse] = React.useState(null);
  const [notification, setNotification] = React.useState(null); // Estado para controlar a notificação

  const navigate = useNavigate();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleModalResponse = (response) => {
    setUserResponse(response);
    setShowModal(false);
    response && handleDeleteTrip();
  };

  const showNotification = (message, type) => {
    const notification = (
      <Notification message={message} type={type} onClose={() => setNotification(null)} />
    );
    setNotification(notification);
  };

  const handleInputChange = (invDescription, invValue) => {
    api
      .post(`/invoices/${params.id}`, {
        description: invDescription,
        value: invValue,
      })
      .then((res) => {
        const newInvoice = {
          description: invDescription,
          value: invValue,
          created_at: new Date(),
          id: res.data[0],
        };
        setInvoices([...invoices, newInvoice]);
        showNotification('Nota Adicionada', 'success');
      });
  };

  const handleDeleteInvoice = (invoiceId) => {
    try {
      api.delete(`/invoices/${invoiceId}`).then(() => {
        setInvoices((updatedInvoices) =>
          updatedInvoices.filter((invoice) => invoice.id !== invoiceId)
        );
        showNotification('Nota Removida', 'success');
      });
    } catch (error) {
      showNotification('Falha ao remover Nota.', 'error');
    }
  };

  const handleDateLeftChange = (date) => {
    setDateLeft(new Date(date));
  };

  const handleDateReturnChange = (date) => {
    setDateReturn(new Date(date));
  };

  const handleDeleteTrip = () => {
    api.delete(`/trips/${params.id}`).then(() => {
      navigate("/");
      showNotification('Viagem deletada com sucesso.', 'success');
    });
  };

  useEffect(() => {
    if (dateLeft && dateReturn) {
      setTotalValue(compareDate(dateLeft, dateReturn));
    }
  }, [dateLeft, dateReturn]);

  useEffect(() => {
    api
      .put(`details/${params.id}`, {
        dataLeave: dateLeft,
        dataReturn: dateReturn,
        dailyTotal: totalValue,
        totalSpend: amountSpend,
      })
      .then(() => {
        setLoading(false);       
      });
  }, [totalValue]);

  useEffect(() => {
    const totalInvoiceValue = invoices.reduce(
      (acc, invoice) => acc + parseFloat(invoice.value),
      0
    );

    setAmountSpend(totalInvoiceValue);
  }, [invoices]);

  useEffect(() => {
    async function fetchTripData() {
      try {
        const res = await api.get(`/details/${params.id}`);
        setTripData(res.data.tripData[0]);
        setInvoices(res.data.tripNotes);
        setDateLeft(new Date(res.data.tripData[0].dataLeave));
        setDateReturn(new Date(res.data.tripData[0].dataReturn));
        setAmountSpend(res.data.tripData[0].totalSpend);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados da viagem:", error);
        setLoading(false);
      }
    }

    fetchTripData();
  }, []);

  return (
    <Container>
      <Header />
      <Title title="Detalhes da Viagem" returnButton goTo="/" />
      {loading ? (
        <Loader />
      ) : (
        <main>
          <div className="city-area">
            <SubTitle
              title={`${tripData?.city}/${tripData?.uf?.toUpperCase()}`}
              iconSrc={mapIcon}
            />
            <button onClick={() => handleShowModal()}>
              <FaTrashCan />
            </button>
          </div>

          <CardArea>
            <ValueCard
              title="Valor Total de Diárias"
              value={totalValue.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
              IsRed={false}
            />
            <ValueCard
              title="Valor Gasto"
              value={amountSpend.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
              IsRed={true}
            />
          </CardArea>
          <CardArea className="dateCard">
            <DateTimeCard
              onDateChange={handleDateLeftChange}
              dateValue={dateLeft}
              title="Data/Hora Saída"
            />
            <DateTimeCard
              onDateChange={handleDateReturnChange}
              dateValue={dateReturn}
              title="Data/Hora Retorno"
            />
          </CardArea>
          <SubTitle title={"Suas Notas"} iconSrc={walletIcon} />
          <InvoiceArea>
            <Invoice
              isNew
              dateTime="Adicione uma nota fiscal"
              onInputChange={handleInputChange}
            />

            {invoices &&
              invoices.map((invoice) => (
                <Invoice
                  key={invoice.id}
                  dateTime={formatDate(new Date(invoice.created_at))}
                  invDescription={invoice.description}
                  invValue={invoice.value}
                  onDelete={() => handleDeleteInvoice(invoice.id)}
                  readOnly
                  entranceAnimation
                />
              ))}
          </InvoiceArea>
        </main>
      )}
      {showModal && (
        <Modal
          icon={FaTriangleExclamation}
          question="Deseja realmente deletar essa viagem? Você perderá todos os dados de notas cadastradas para ela."
          buttonTrue="Sim, deletar"
          buttonFalse="Cancelar"
          onResponse={handleModalResponse}
        />
      )}
      {notification} {/* Renderiza a notificação aqui */}
    </Container>
  );
}
