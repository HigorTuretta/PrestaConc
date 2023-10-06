import { Input } from "../../components/Input";
import {
  Container,
  Content,
  Form,
  Logo,
  FormArea,
  PasswordChangeForm,
} from "./styles";
import { FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Notification } from "../../components/Notification";
import { api } from "../../services/api";

export function PasswordToken() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [notification, setNotification] = useState(null);
  const [updateForm, setUpdateForm] = useState(false);

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

  function handleToken() {
    setIsLoading(true);

    if (!token) {
      showNotification("Informe o token recebido no email!", "error");
      setIsLoading(false);
      return;
    }

    api
      .post("/passwordRecovery/validar", { email: params.email, token })
      .then(() => {
        setUpdateForm(true);
        setIsLoading(false);
      })
      .catch((err) => {
        showNotification(err.response.data.message, "error");
        setIsLoading(false);
      });
  }

  function handleChangePassword() {
    setIsLoading(true);

    if (!password || !repeatPassword) {
      showNotification("Informe todos os campos!", "error");
      setIsLoading(false);
      return;
    }

    if (password !== repeatPassword) {
      showNotification("As senhas precisam ser iguais!", "error");
      setIsLoading(false);
      return;
    }

    api
      .put(`/passwordRecovery/${params.email}`, {
        token,
        newPassword: password,
      })
      .then((res) => {
        showNotification(res.data, "success");
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        showNotification(err.message, "error");
        setIsLoading(false);
      });
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
        <FormArea>
          <p>
            {!updateForm
              ? "Enviamos um e-mail contendo um token de validação para o endereço que você forneceu. Basta inseri-lo abaixo para concluir o processo de alteração de senha!"
              : "Pronto! Basta escolher sua nova senha!"}
          </p>
          {!updateForm ? (
            <Form>
              <Input
                placeholder="Token de Validação"
                type="text"
                white
                icon={FiLock}
                title="Informe o token recebido no email."
                onChange={(e) => setToken(e.target.value)}
              />
              <Button
                loading={isLoading}
                onClick={() => handleToken()}
                title="Validar Token"
              />
            </Form>
          ) : (
            <PasswordChangeForm>
              <Input
                placeholder="Nova senha"
                type="password"
                white
                icon={FiLock}
                title="Informe sua nova senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="Informe a senha novamente"
                type="password"
                white
                icon={FiLock}
                title="Repita a senha"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <Button
                loading={isLoading}
                onClick={() => handleChangePassword()}
                title="Alterar Senha"
              />
            </PasswordChangeForm>
          )}
        </FormArea>
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
