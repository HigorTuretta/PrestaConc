import { Container } from "./styles";
import { ButtonText } from '../ButtonText';

export function Title({ title, returnButton = false }) {
  return (
    <Container $returnButton={returnButton}>
      <h1>{title}</h1>
      {returnButton ? <ButtonText title="Voltar" isAtive /> : ""}
    </Container>
  );
}
