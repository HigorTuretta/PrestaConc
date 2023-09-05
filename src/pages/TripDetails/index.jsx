import { Container, CardArea, InvoiceArea } from "./styles";
import { Header } from "../../components/Header";
import { ValueCard } from "../../components/ValueCard";
import { DateTimeCard } from "../../components/DateTimeCard";
import { Invoice } from "../../components/Invoice";
import { Title } from "../../Components/Title";
import { SubTitle } from "../../components/SubTitle";
import { formatDate } from "../../utils/formatDate";
import { useState, useEffect } from "react";
import { compareDate } from "../../utils/dateDiff";

import mapIcon from "../../assets/Map.png";
import walletIcon from "../../assets/Wallet.png";

export function TripDetails() {
  const initialDateReturn = new Date();
  initialDateReturn.setDate(initialDateReturn.getDate() + 1);

  const [invoices, setInvoices] = useState([]);
  const [dateLeft, setDateLeft] = useState(new Date());
  const [dateReturn, setDateReturn] = useState(initialDateReturn);
  const [totalValue, setTotalValue] = useState(0);
  const [amountSpend, setAmountSpend] = useState(0);

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

  useEffect(() => {
    const totalInvoiceValue = invoices.reduce(
      (acc, invoice) => acc + parseFloat(invoice.value),
      0
    );

    setAmountSpend(totalInvoiceValue);
  }, [invoices]);

  return (
    <Container>
      <Header />
      <main>
        <Title title = 'Detalhes da Viagem' returnButton />      
        <SubTitle title={"Muriaé/MG"} iconSrc={mapIcon} />
        <CardArea>
          <ValueCard
            title="Valor Total de Diárias"
            value={totalValue}
            IsRed={false}
          />
          <ValueCard title="Valor Gasto" value={amountSpend} IsRed={true} />
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
        <SubTitle title={"Suas Notas"} iconSrc={walletIcon} />
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
