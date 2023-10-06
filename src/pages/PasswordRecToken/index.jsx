import { Input } from "../../components/Input";
import { Container, Content, Form, Logo, LoginArea } from "./styles";
import { FiMail } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Notification } from "../../components/Notification";
import { api } from "../../services/api";

export function PasswordRecToken() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
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

  function handlePasswordReset() {
    setIsLoading(true);

    if (!email) {
      showNotification("Informe seu email!", "error");
      setIsLoading(false);
      return;
    }

    api
      .post("/passwordRecovery/token", {email})
      .then(navigate(`/password-token/${email}`))
      .catch((err) => {
        showNotification(`Erro ao realizar login: ${err.message}`, "error");
        setIsLoading(false);
      });
  }

  function handleKeyPress(e) {
    e.key === "Enter" && handlePasswordReset();
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <h1>Calky</h1>
          <p>Calculador de prestação de contas.</p>
        </Logo>
        <LoginArea>
          <h4>Recupere sua senha 🙌</h4>
          <Form>
            <Input
              placeholder="Email cadastrado na conta"
              type="email"
              white
              icon={FiMail}
              title="Informe o email"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <Button
              loading={isLoading}
              onClick={() => handlePasswordReset()}
              title="Recuperar Senha"
            />
          </Form>
        </LoginArea>
        <ButtonText
          title="👈 Volte ao Login"
          isAtive={!isLoading}
          white
          onClick={() => navigate("/")}
        />
      </Content>
      {notification}
    </Container>
  );
}
