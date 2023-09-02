import { Container, InputArea } from "./styles";

export function DateTimeCard({ title }) {
  return (
    <Container>
      <h5>{title}</h5>
      <InputArea>
        <input type="text" value="10/07/2023" />
        <p>às</p>
        <input type="text" value="09:10H" />
      </InputArea>
    </Container>
  );
}
