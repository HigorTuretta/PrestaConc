import { Input } from "../../components/Input";
import { Container, Form, Background, Logo } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Notification } from "../../components/Notification";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState(null);

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

  function handleLogin() {
    setIsLoading(true);

    if (!email || !password) {
      showNotification("Informe seu email e/ou senha!", "error");
      setIsLoading(false);
      return;
    }

    signIn({ email, password })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        showNotification(`Erro ao realizar login: ${err.message}`, "error");
        setIsLoading(false);
      });
  }

  function handleKeyPress(e) {
    e.key === "Enter" && handleLogin();
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Form>
        <Logo>
          <h1>CALKY</h1>
          <p>Seu controlador pessoal de viagens.</p>
        </Logo>
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
      {notification}
    </Container>
  );
}
