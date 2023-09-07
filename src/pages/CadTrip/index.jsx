import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { useNavigate } from "react-router-dom";


export function CadTrip() {

  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Title title="Cadastar Viagem" returnButton />
      <main>
        <Form>
          <div className="formSectionRow">
            <Input type="text" title="UF" />
            <Input type="text" title="Cidade" />
          </div>
        </Form>
        <Button title="Confirmar" />
      </main>
    </Container>
  );
}
