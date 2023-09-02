import { Container, Title, CardArea } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { ValueCard } from "../../components/ValueCard";
import { DateTimeCard } from "../../components/DateTimeCard";
import mapIcon from "../../assets/map.png";
import walletIcon from "../../assets/wallet.png";

export function TripDetails() {
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
          <DateTimeCard title='Data/Hora Saída'/>
          <DateTimeCard title='Data/Hora Retorno'/>
        </CardArea>
        <Title>
          <h2>
            <img src={walletIcon} alt="Icone de Carteira" /> Suas Notas
          </h2>
        </Title>
      </main>
    </Container>
  );
}
