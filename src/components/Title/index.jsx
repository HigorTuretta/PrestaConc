import { Container } from "./styles";
import { ButtonText } from '../ButtonText';

export function Title({ title, returnButton = false, goTo= -1 }) {
  return (
    <Container $returnButton={returnButton}>
      <h1>{title}</h1>
      {returnButton ? <ButtonText goTo={goTo} title="Voltar" isAtive /> : ""}
    </Container>
  );
}
