import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setIsLoading(true);

    signIn({ email, password })
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }

  function handleKeyPress(e){   
    e.key === 'Enter' && handleLogin()
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
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
          <Input
            placeholder="Sua senha"
            type="password"
            icon={FiLock}
            title="Senha"
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
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
