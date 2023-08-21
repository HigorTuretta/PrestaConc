import { Container } from "./styles";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import imgCard from "../../assets/salvador.jpeg";

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <h1>Suas Viagens</h1>
        <TripCard title="Salvador/BA" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
      </main>
    </Container>
  );
}
