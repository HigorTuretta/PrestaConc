import { Container, Form, Content } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Notification } from "../../components/Notification";
import { Footer } from "../../components/Footer";
import { formatDate, localeDate } from "../../utils/formatDate";

export function CadTrip() {
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const navigate = useNavigate();

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

  function handleCadTrip() {
    if (!city || !uf) {
      showNotification("Informe o UF e/ou a  Cidade para continuar!", "error");
      return;
    }

    setIsLoading(true)

    api
      .post("/trips/", { uf, city })
      .then((res) => {
        const trip_id = res.data[0];
        showNotification("Viagem criada com sucesso!", "success");
        const initialDateLeft = new Date();
        const initialDateReturn = new Date();
        initialDateReturn.setDate(initialDateReturn.getDate() + 1);

        api
          .post("/details", {
            trip_id,
            dataLeave: initialDateLeft,
            dataReturn: initialDateReturn,
            dailyTotal: 80,
            totalSpend: 0,
          })
          .then(() => {
            setTimeout(() => {
              navigate(`/details/${trip_id}`);
            }, 1000);
          
          })
          .catch((err) => {
            showNotification(
              "Erro ao redirecionar ou adicionar dados da viagem!",
              "error"
            );
            setTimeout(() => {
              navigate(-1);
            }, 1000);           
          });
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          showNotification(err.response.data.message, "error");
        } else {
          showNotification(
            `${err.message} | Não foi possivel realizar o cadastro.`,
            "error"
          );
        }
      });
  }

  function handleKeyPress(e) {
    e.key === "Enter" && handleCadTrip();
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <Title title="Cadastar Viagem" returnButton />

        <Form>
          <Input
            type="text"
            title="UF"
            onChange={(e) => setUf(e.target.value)}
          />
          <Input
            type="text"
            title="Cidade"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </Form>
        <Button title="Confirmar" loading={isLoading} onClick={handleCadTrip} />
      </Content>
      <Footer color="black"/>
      {notification}
    </Container>
  );
}
