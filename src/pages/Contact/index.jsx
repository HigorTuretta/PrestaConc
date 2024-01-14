import { Title } from "../../components/Title";
import { SubTitle } from "../../components/SubTitle";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Content } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Alert } from "../../components/Alert";
import { Loader } from "../../components/Loader";
import { useState, useEffect, Fragment } from "react";
import { Notification } from "../../components/Notification";
import { api } from "../../services/api";
export function Contact() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sugest, setSugest] = useState("");
  const [notification, setNotification] = useState(null);
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(true);

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

  function handleSendMessage() {
    setIsLoading(true);
    if (!email) {
      showNotification("Informe seu email!", "error");
      setIsLoading(false);
      return;
    }
    if (!sugest) {
      showNotification("Informe a sugestão!", "error");
      setIsLoading(false);
      return;
    }

    api
      .post("/contact/sugest", { email, sugest })
      .then((response) => {
        setIsLoading(false);
        showNotification(response.data, "success");
        setAlert(true);
        setEmail("");
        setSugest("");
      })
      .catch((err) => {
        showNotification(err.response.data.message, "error");
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(false);
    setLoading(false);
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Header />

          <Content>
            <Title title="Fale com a gente!" />
            <SubTitle title="Deixe sua sugestão de melhoria ou aquela ideia bacana para ajudar todo mundo! 😉" />
            <Input
              title="Seu email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Sua sugestão</label>
            <textarea
              rows="10"
              cols="33"
              onChange={(e) => setSugest(e.target.value)}
            />

            <Button
              title="Enviar"
              onClick={() => handleSendMessage()}
              loading={isLoading}
            />

            {alert && (
              <Alert msg="Agradecemos por compartilhar suas ideias conosco. Sua contribuição é muito importante para a melhoria contínua do nosso App. 😎" />
            )}
          </Content>
          {notification}
          <Footer color="black" />
        </Fragment>
      )}
    </Container>
  );
}
