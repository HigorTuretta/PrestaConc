import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function CadTrip() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Cadastar Viagem</h1>
        <Form>
          <div className="formSectionRow">
            <Input type="text" title="UF" colorTheme />
            <Input type="text" title="Cidade" colorTheme />
          </div>
          <div className="formSectionRow">
            <Input type="date" title="Data de Saída" colorTheme />
            <Input type="time" title="Horário de Saída" colorTheme />
          </div>
          <div className="formSectionRow">
            <Input type="date" title="Data de Retorno" colorTheme />
            <Input type="time" title="Horário de Retorno" colorTheme />
          </div>
        </Form>
        <Button title="Confirmar" />
      </main>
    </Container>
  );
}
