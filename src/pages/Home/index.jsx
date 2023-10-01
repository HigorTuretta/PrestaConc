import { Container, Content, TripsArea } from "./styles";
import { TripCard } from "../../components/TripCard";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";
import { Notification } from "../../components/Notification";
import { formatDate } from "../../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth"; 

export function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [trips, setTrips] = useState([]);
  const [notification, setNotification] = useState(null);
  const {signOut} = useAuth()
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

  function handleCreateTrip() {
    navigate("/new");
  }

  function handleTripDetails(tripId) {
    navigate(`/details/${tripId}`);
  }

  useEffect(() => {
    async function fetchTrips() {
      try {
        const res = await api.get("/trips");
        setTrips(res.data);
        setLoading(false); // Marca o carregamento como concluído
      } catch (error) {
        if ( error.response.data.message === "JWT Token invalido."){
          navigate('/')
          signOut();
        }
        showNotification("Erro ao buscar viagens:", "error");
        setLoading(false); // Marca o carregamento como concluído mesmo em caso de erro
      }
    }

    fetchTrips();
  }, []);

  return (
    <Container>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <Content>
          <Button
            title={"Adicionar uma Viagem"}
            onClick={() => handleCreateTrip()}
          />

          <Title title="Suas Viagens" />

          <TripsArea>
            {trips.map((trip) => (
              <TripCard
                title={`${trip.city} / ${trip.uf.toUpperCase()}`}
                dataLeave={formatDate(new Date(trip.dataLeave))}
                dataReturn={formatDate(new Date(trip.dataReturn))}
                key={String(trip.trip_id)}
                onClick={() => handleTripDetails(trip.trip_id)}
              />
            ))}
          </TripsArea>
        </Content>
      )}
      {notification}
    </Container>
  );
}
