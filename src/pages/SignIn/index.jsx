import { Input } from "../../components/input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>
          Olá,
          <br />
          Bem vindo!
        </h1>
        <div>
          <Input
            placeholder="Seu email"
            type="email"
            icon={FiMail}
            title="Email"
          />
          <Input
            placeholder="Sua senha"
            type="password"
            icon={FiLock}
            title="Senha"
          />
          <Button title="Login" />
        </div>
        <ButtonText title="Crie sua conta!" isAtive />
      </Form>
      <Background />
    </Container>
  );
}
