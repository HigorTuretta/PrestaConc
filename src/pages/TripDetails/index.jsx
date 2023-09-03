import { Container, Title, CardArea, InvoiceArea } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { ValueCard } from "../../components/ValueCard";
import { DateTimeCard } from "../../components/DateTimeCard";
import { Invoice } from "../../Components/Invoice";
import { formatDate } from "../../utils/formatDate";
import { useState } from "react";

import mapIcon from "../../assets/map.png";
import walletIcon from "../../assets/wallet.png";

export function TripDetails() {
  const [invoices, setInvoices] = useState([]);

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
          <ValueCard title="Valor Disponível" value="280,00" IsRed={false} />
          <ValueCard title="Valor Gasto" value="160,00" IsRed={true} />
        </CardArea>
        <CardArea>
          <DateTimeCard title="Data/Hora Saída" />
          <DateTimeCard title="Data/Hora Retorno" />
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
