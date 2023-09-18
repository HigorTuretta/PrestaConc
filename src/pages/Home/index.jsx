import { Container } from "./styles";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";
import { formatDate } from '../../utils/formatDate'
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
      setTrips(res.data);
    }

    fetchTrips();
  }, []);

  return (
    <Container>
      <Header />
      <Title title="Suas Viagens" />
      {trips === undefined ? (
        <Loader />
      ) : (
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
                title={`${trip.city} / ${trip.uf.toUpperCase()}`}
                dataLeave={formatDate(new Date(trip.dataLeave))}
                dataReturn={formatDate(new Date(trip.dataReturn))}
                key={String(trip.trip_id)}
                onClick={() => handleTripDetails(trip.trip_id)}    
              />
            ))}
        </main>
      )}
    </Container>
  );
}
