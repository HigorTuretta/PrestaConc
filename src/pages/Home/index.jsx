import { Container } from "./styles";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import imgCard from "../../assets/travel.jpg";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
export function Home() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  function handleCreateTrip() {
    navigate("/new");
  }

  function handleTripDetails(tripId) {
    navigate(`/details/${tripId}`);
  }

  useEffect(() => {
    async function fetchTrips() {
      const res = await api.get("/trips");
      console.log(res)
      setTrips(res.data);      
    }

    fetchTrips();
  }, []);

  return (
    <Container>
      <Header />
      <Title title="Suas Viagens" />
      <main>
        <div className="button-area">
          <Button
            title={"Adicionar uma Viagem"}
            onClick={() => handleCreateTrip()}
          />
        </div>
        {trips &&
          trips.map((trip) => (
            <TripCard
              title={trip.city}
              key={String(trip.id)}
              onClick={() => handleTripDetails(trip.id)}
              $url={imgCard}
            />
          ))}
      </main>
    </Container>
  );
}
