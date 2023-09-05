import { Container } from "./styles";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import {Title} from "../../components/Title";
import imgCard from "../../assets/travel2.jpg";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Title title='Suas Viagens' />
        <TripCard title="Salvador/BA" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
      </main>
    </Container>
  );
}
