import { Input } from "../../components/Input";
import { Container, Content, Form, Logo, LoginArea } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { isEmail } from "validator";
import { Notification } from "../../components/Notification";
import { Footer } from "../../components/Footer";
export function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
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

  function handleRegister() {
    setIsLoading(true);

    if (!name || !email || !password || !repeatPassword) {
      setIsLoading(false);
      showNotification("Preencha todos os campos para continuar!", "error");
      return;
    }

    if (!isEmail(email)) {
      setIsLoading(false);
      showNotification("Informe um email válido!", "error");
      return;
    }

    if (password !== repeatPassword) {
      setIsLoading(false);
      showNotification("As senhas não são as mesmas.", "error");
      return;
    }

    api
      .post("/users/register", { name, email, password })
      .then(() => {
        showNotification("Usuário criado com sucesso!", "success");
        setTimeout(() => {         
          navigate("/");
        }, 1000);
       
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data) {
          showNotification(err.response.data.message, "error");
        } else {
          showNotification(
            `${err.message} | Não foi possível realizar o cadastro.`
          );
        }
      });
  }

  function handleKeyPress(e) {
    e.key === "Enter" && handleRegister();
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
          <h4>
            Crie sua conta!
          </h4>
          <Form>
            <Input
              placeholder="Seu email"
              type="email"
              white
              icon={FiMail}
              title="Email"
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <Input
              placeholder="Seu Nome"
              type="email"
              white
              icon={FiUser}
              title="Seu nome"
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <Input
              placeholder="Sua senha"
              type="password"
              white
              icon={FiLock}
              title="Senha"
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <Input
              placeholder="Repita a senha"
              type="password"
              white
              icon={FiLock}
              title="Repita sua senha"
              onChange={(e) => setRepeatPassword(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e)}
            />
            <Button
              loading={isLoading}
              onClick={() => handleRegister()}
              title="Cadastrar-se"
            />
          </Form>
        </LoginArea>
        <p>
         Já está entre nós?{" "}
          <ButtonText
            title="Faça o Login!"
            isAtive={!isLoading}
            white
            onClick={() => navigate("/")}
          />{" "}
        </p>
      </Content>
      <Footer/>
      {notification}
    </Container>
  );
}
