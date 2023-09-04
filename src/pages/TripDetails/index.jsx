import { Container, Title, CardArea, InvoiceArea } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { ValueCard } from "../../components/ValueCard";
import { DateTimeCard } from "../../components/DateTimeCard";
import { Invoice } from "../../components/Invoice";
import { formatDate } from "../../utils/formatDate";
import { useState, useEffect } from "react";
import { compareDate } from "../../utils/dateDiff";

import mapIcon from "../../assets/map.png";
import walletIcon from "../../assets/wallet.png";

export function TripDetails() {
  const initialDateReturn = new Date();
  initialDateReturn.setDate(initialDateReturn.getDate() + 1);

  const [invoices, setInvoices] = useState([]);
  const [dateLeft, setDateLeft] = useState(new Date());
  const [dateReturn, setDateReturn] = useState(initialDateReturn);
  const [totalValue, setTotalValue] = useState(0);

  const handleInputChange = (invDescription, invValue) => {
    const newInvoice = {
      description: invDescription,
      value: parseFloat(invValue).toFixed(2),
      dateTime: formatDate(new Date()),
    };

    setInvoices([...invoices, newInvoice]);
  };

  const handleDeleteInvoice = (index) => {
    const updatedInvoices = invoices.filter((_, i) => i !== index);
    setInvoices(updatedInvoices);
  };

  const handleDateLeftChange = (date) => {
    setDateLeft(new Date(date));
  };

  const handleDateReturnChange = (date) => {
    setDateReturn(new Date(date));
  };

  useEffect(() => {
    setTotalValue(compareDate(dateLeft, dateReturn));
  }, [dateLeft, dateReturn]);

  return (
    <Container>
      <Header />
      <main>
        <Title>
          <h1>Detalhes da Viagem</h1>
          <ButtonText title="Voltar" isAtive />
        </Title>
        <Title>
          <h2>
            <img src={mapIcon} alt="Icone de Mapa" /> Muriaé/MG
          </h2>
        </Title>
        <CardArea>
          <ValueCard
            title="Valor Disponível"
            value={totalValue}
            IsRed={false}
          />
          <ValueCard title="Valor Gasto" value="160,00" IsRed={true} />
        </CardArea>
        <CardArea>
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
        <Title>
          <h2>
            <img src={walletIcon} alt="Icone de Carteira" /> Suas Notas
          </h2>
        </Title>
        <InvoiceArea>
          <Invoice
            isNew
            dateTime="Adicione uma nota fiscal"
            onInputChange={handleInputChange}
          />

          {invoices &&
            invoices.map((invoice, index) => (
              <Invoice
                dateTime={String(invoice.dateTime)}
                invDescription={invoice.description}
                invValue={`R$ ${invoice.value}`}
                key={String(index)}
                onDelete={() => handleDeleteInvoice(index)}
                readOnly
              />
            ))}
        </InvoiceArea>
      </main>
    </Container>
  );
}
