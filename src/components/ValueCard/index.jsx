import { Container } from "./styles";

export function ValueCard({ title, value, IsRed = false, isBalance = false}) {
  return (
    <Container $isred={IsRed} $isbalance={isBalance}>
      <span>{title}</span>
      <h1>{value}</h1>
    </Container>
  );
}
