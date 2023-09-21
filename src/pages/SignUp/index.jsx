import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { isEmail } from "validator";
import { Notification} from '../../components/Notification'


export function SignUp() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [notification, setNotification] = useState(null)


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
      showNotification('Preencha todos os campos para continuar!', 'error')
      return;
    }

    if (!isEmail(email)){
      setIsLoading(false);
      showNotification('Informe um email válido!', 'error')
      return;
    }

    if (password !== repeatPassword) {
      setIsLoading(false);
      showNotification('As senhas não são as mesmas.', 'error')
      return;
    }

    api
      .post("/users/register", { name, email, password })
      .then(() => {
        showNotification('Usuário criado com sucesso!', 'success')
        navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data) {
         showNotification(err.response.data.message, 'error')
        } else {
          showNotification(`${err.message} | Não foi possível realizar o cadastro.`)
        }
      });
  }

  function handleKeyPress(e){   
    e.key === 'Enter' && handleRegister()
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
            onKeyDown={(e) => handleKeyPress(e)}
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
      {notification}
    </Container>
  );
}
