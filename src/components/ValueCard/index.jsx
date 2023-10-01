import { Container } from "./styles";

export function ValueCard({ title, value, IsRed = false }) {
  return (
    <Container $isred={IsRed}>
      <span>{title}</span>
      <h1>{value}</h1>
    </Container>
  );
}
