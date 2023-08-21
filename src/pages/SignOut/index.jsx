import { Input } from "../../components/input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
export function SignOut() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Crie sua conta!</h1>
        <div>
          <Input
            placeholder="Seu melhor email"
            type="email"
            icon={FiMail}
            title="Email"
          />
          <Input
            placeholder="Seu nome"
            type="text"
            icon={FiMail}
            title="Nome"
          />
          <Input
            placeholder="Crie sua senha"
            type="password"
            icon={FiLock}
            title="Senha"
          />
          <Input
            placeholder="Repita sua senha"
            type="password"
            icon={FiLock}
            title="Repita sua senha"
          />
          <Button title="Cadastrar" />
        </div>
        <ButtonText title="Volte ao Login" isAtive />
      </Form>
    </Container>
  );
}
