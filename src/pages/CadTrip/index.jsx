import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Message, useToaster } from "rsuite";

export function CadTrip() {  
  const [uf, setUf] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const toaster = useToaster();

  function handleCadTrip() {
    api
      .post("/trips/", { uf, city })
      .then((res) => {
        const trip_id = res.data[0]        
        const message = (
          <Message type="success" showIcon closable>
            Viagem adicionada com sucesso!
          </Message>
        );
        toaster.push(message, { placement: "bottomCenter", duration: 5000 });
        navigate(`/details/${trip_id}`);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          const message = (
            <Message type="error" showIcon closable>
              {err.response.data.message}
            </Message>
          );
          toaster.push(message, { placement: "bottomCenter", duration: 5000 });
        } else {
          const message = (
            <Message type="error" showIcon closable>
              {err.message} | Não foi possivel realizar o cadastro.
            </Message>
          );
          toaster.push(message, { placement: "bottomCenter", duration: 5000 });
        }
      });
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Header />
      <Title title="Cadastar Viagem" returnButton />
      <main>
        <Form>
          <div className="formSectionRow">
            <Input
              type="text"
              title="UF"
              onChange={(e) => setUf(e.target.value)}
            />
            <Input
              type="text"
              title="Cidade"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </Form>
        <Button title="Confirmar" loading={isLoading} onClick={handleCadTrip} />
      </main>
    </Container>
  );
}
