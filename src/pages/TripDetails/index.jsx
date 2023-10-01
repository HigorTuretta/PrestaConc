import { useEffect, useState } from "react";
import {
  Container,
  DateArea,
  ValueArea,
  InvoiceInputArea,
  InvoiceArea,
  Content,
} from "./styles";
import { Header } from "../../components/Header";
import { ValueCard } from "../../components/ValueCard";
import { Invoice } from "../../components/Invoice";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { Modal } from "../../components/Modal";
import { Loader } from "../../components/Loader";
import { localeDate } from "../../utils/formatDate";
import { compareDate } from "../../utils/dateDiff";
import { api } from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import mapIcon from "../../assets/mapIcon.png";
import walletIcon from "../../assets/walletIcon.png";
import { FaPlus, FaExclamationTriangle,FaPlaneArrival,FaPlaneDeparture } from "react-icons/fa";
import { Notification } from "../../components/Notification";

export function TripDetails() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);
  const [invDescription, setInvDescription] = useState();
  const [invValue, setInvValue] = useState();
  const [dateLeft, setDateLeft] = useState();
  const [dateReturn, setDateReturn] = useState();
  const [totalValue, setTotalValue] = useState(0);
  const [amountSpend, setAmountSpend] = useState(0);
  const [tripData, setTripData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const [notification, setNotification] = useState(null); // Estado para controlar a notificação

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
      <Notification
        message={message}
        type={type}
        onClose={() => {
          setTimeout(() => {
            setNotification(null);
          }, 500);
        }}
      />
    );
    setNotification(notification);
  };

  const handleAddInvoice = () => {
    if (invValue === "" || invValue === 0) {
      showNotification("Informe ao menos o valor da nota fiscal!", "error");
      return;
    }
    api
      .post(`/invoices/${params.id}`, {
        description: invDescription ? invDescription : "Alimentação",
        value: invValue,
        created_at: localeDate(new Date()),
      })
      .then((res) => {
        const newInvoice = {
          description: invDescription ? invDescription : "Alimentação",
          value: invValue,
          created_at: localeDate(new Date()),
          id: res.data[0],
        };
        setInvoices([...invoices, newInvoice]);
        showNotification("Nota Adicionada", "success");
      });

    setInvValue("");
    setInvDescription("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddInvoice();
    }
  };

  const handleDeleteInvoice = (invoiceId) => {
    try {
      api.delete(`/invoices/${invoiceId}`).then(() => {
        setInvoices((updatedInvoices) =>
          updatedInvoices.filter((invoice) => invoice.id !== invoiceId)
        );
        showNotification("Nota Removida", "success");
      });
    } catch (error) {
      showNotification("Falha ao remover Nota.", "error");
    }
  };

  const handleDateLeftChange = (date) => {
    setDateLeft(localeDate(new Date(date)));
  };

  const handleDateReturnChange = (date) => {
    setDateReturn(localeDate(new Date(date)));
  };

  const handleDeleteTrip = () => {
    api.delete(`/trips/${params.id}`).then(() => {
      navigate("/");
      showNotification("Viagem deletada com sucesso.", "success");
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
  }, [totalValue, dateLeft, dateReturn]);

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
        setDateLeft(localeDate(new Date(res.data.tripData[0].dataLeave)));
        setDateReturn(localeDate(new Date(res.data.tripData[0].dataReturn)));
        setAmountSpend(res.data.tripData[0].totalSpend);
        setLoading(false);
      } catch (error) {
        showNotification("Erro ao buscar dados da viagem:", "error");
        setLoading(false);
      }
    }

    fetchTripData();
  }, []);

  return (
    <Container>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Content>
          <Title title="Detalhes da Viagem" returnButton goTo="/" />
          <SubTitle
            title={`${tripData?.city}/${tripData?.uf?.toUpperCase()}`}
            iconSrc={mapIcon}
            deleteButton={true}
            onDeleteButtonClick={handleShowModal} // Passa a função handleShowModal
          />
          <DateArea>
            <Input
              title="Data/Hora Saída"
              type="datetime-local"
              value={dateLeft}
              onChange={(e) => handleDateLeftChange(e.target.value)}
              icon={FaPlaneDeparture}
            />
            <Input
              title="Data/Hora Retorno"
              type="datetime-local"
              value={dateReturn}
              onChange={(e) => handleDateReturnChange(e.target.value)}
              icon={FaPlaneArrival}
            />
          </DateArea>
          <ValueArea>
            <ValueCard
              title="Valor Total"
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
          </ValueArea>
          <SubTitle title={"Suas Notas"} iconSrc={walletIcon} />
          <InvoiceInputArea>
            <Input
              className="description"
              onChange={(e) => setInvDescription(e.target.value)}
              value={invDescription}
              type="text"
              title="Descrição"
            />
            <Input
              className="notDescription"
              value={invValue}
              onChange={(e) => setInvValue(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
              type="number"
              step="0.01"
              title="Valor"
            />
            <Button
              className="notDescription"
              onClick={() => handleAddInvoice()}
              icon={FaPlus}
            />
          </InvoiceInputArea>
          <InvoiceArea>
            {invoices &&
              invoices.map((invoice) => (
                <Invoice
                  key={invoice.id}
                  invDescription={invoice.description}
                  invValue={invoice.value}
                  onDelete={() => handleDeleteInvoice(invoice.id)}
                  entranceAnimation
                />
              ))}
          </InvoiceArea>
        </Content>
      )}
      {showModal && (
        <Modal
          icon={FaExclamationTriangle}
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
