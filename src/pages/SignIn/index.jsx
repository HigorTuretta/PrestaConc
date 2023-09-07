import { Input } from "../../components/input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoading(true);
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
          <Button
            loading={isLoading}
            onClick={() => handleLogin()}
            title="Login"
          />
        </div>
        <ButtonText
          title="Crie sua conta!"
          isAtive={!isLoading}
          onClick={() => navigate("/register")}
        />
      </Form>
      <Background />
    </Container>
  );
}
