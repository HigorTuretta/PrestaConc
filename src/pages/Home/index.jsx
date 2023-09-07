import { Container } from "./styles";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import imgCard from "../../assets/travel2.jpg";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleCreateTrip() {
    navigate("/new");
  }

  function handleTripDetails(){
    navigate("/details/1");
  }

  return (
    <Container>
      <Header />
      <Title title="Suas Viagens" />
      <main>
        <div className="button-area">
          <Button title={"Adicionar uma Viagem"} onClick={() => handleCreateTrip()} />
        </div>
        <TripCard title="Salvador/BA" onClick={()=> handleTripDetails()} $url={imgCard} />
        <TripCard title="Muriaé/MG" $url={imgCard} />
      </main>
    </Container>
  );
}
