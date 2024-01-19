import { Input } from "../../components/Input";
import { Container, Content, Form, Logo, LoginArea, ContentDescription } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { StepsCard } from "../../components/StepsCards";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { Notification } from "../../components/Notification";
import { Footer } from "../../components/Footer";
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

  const steps = [
       {
        id: 1,
        icon: 'plane',
        title: "Passo 1 - Adicionar Viagem",
        description: "Informe seu destino. Basta adicionar o Estado e a Cidade da sua próxima viagem e deixe o Calky cuidar do resto."
    },
    {
        id: 3,
        icon: 'money',
        title: "Passo 2 - Controle de Despesas e Saldos",
        description: "Controle total nas suas mãos. Insira as datas da sua viagem e acompanhe seu saldo disponível. Cadastre notas de alimentação e mantenha seu orçamento sob controle."
    }
];

  return (
    <Container>
      <Content>
        <Logo>
          <h1>Calky</h1>
          <p>Calculador de prestação de contas.</p>
        </Logo>
        <LoginArea>
          <h4>
            Olá, <br /> Bem vindo(a)!
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
              placeholder="Sua senha"
              type="password"
              white
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
          </Form>
        </LoginArea>
        <p>
          Não possui uma conta?{" "}
          <ButtonText
            title="Crie agora!"
            isAtive={!isLoading}
            white
            onClick={() => navigate("/register")}
          />{" "}
        </p>
        <ButtonText
          title="Esqueci minha senha"
          isAtive={!isLoading}
          white
          onClick={() => navigate("/password-reset")}
        />
      </Content>
      <ContentDescription>
          <h2>Gerencie suas despesas de viagem com facilidade<br/>Bem-vindo ao Calky!</h2>
          <p>
            O Calky é o seu assistente de viagens corporativas. Facilitamos a gestão das suas diárias de alimentação, transformando a maneira como você controla seus gastos durante as viagens. 
          </p>
          <h2>Apenas 2 passos simples!</h2>
          <StepsCard steps={steps} />
          <p>Com o Calky, você tem o controle financeiro da sua viagem na palma da sua mão. Desfrute de um processo simplificado de registro de despesas, <b>um sistema de saldo intuitivo e uma visão geral clara de suas despesas de alimentação.</b></p>
      </ContentDescription>
      <Footer />
      {notification}
    </Container>
  );
}
