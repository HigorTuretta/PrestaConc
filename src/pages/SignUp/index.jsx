import { Input } from "../../components/input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Message, useToaster } from "rsuite";

export function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const toaster = useToaster();

  function handleRegister() {
    setIsLoading(true);

    if (!name || !email || !password || !repeatPassword) {
      setIsLoading(false);
      const message = (
        <Message type="warning" showIcon closable>
          Preencha todos os campos.
        </Message>
      );
      toaster.push(message, { placement: "bottomCenter", duration: 5000 });
      return;
    }

    if (password !== repeatPassword) {
      setIsLoading(false);
      const message = (
        <Message type="warning" showIcon closable>
          As senhas não são as mesmas.
        </Message>
      );
      toaster.push(message, { placement: "bottomCenter", duration: 5000 });
      return;
    }

    api
      .post("/users/register", { name, email, password })
      .then(() => {
        const message = (
          <Message type="success" showIcon closable>
            Usuário criado com sucesso!
          </Message>
        );
        toaster.push(message, { placement: "bottomCenter", duration: 5000 });
        navigate('/')
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response) {
          const message = (
            <Message type="error" showIcon closable>
              {err.response.data.message}
            </Message>
          );
          toaster.push(message, { placement: "bottomCenter", duration: 5000 });
        } else {
          const message = (
            <Message type="error" showIcon closable>
              {err.message} | Não foi possivel realizar o cadastro.
            </Message>
          );
          toaster.push(message, { placement: "bottomCenter", duration: 5000 });
        }
      });
  }

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Seu nome"
            type="text"
            icon={FiMail}
            title="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Crie sua senha"
            type="password"
            icon={FiLock}
            title="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Repita sua senha"
            type="password"
            icon={FiLock}
            title="Repita sua senha"
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <Button
            loading={isLoading}
            onClick={() => handleRegister()}
            title="Cadastrar"
          />
        </div>
        <ButtonText
          isAtive={!isLoading}
          title="Volte ao Login"
          onClick={() => navigate("/")}
        />
      </Form>
    </Container>
  );
}
