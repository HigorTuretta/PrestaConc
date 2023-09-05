import { Container } from "./styles";

export function ValueCard({ title, value, IsRed = false }) {
  return (
    <Container $isred={IsRed}>
      <h5>{title}</h5>
      <h1>
        {value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </h1>
    </Container>
  );
}
