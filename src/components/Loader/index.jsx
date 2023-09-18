import { Container } from "./styles";
export const Loader = () => {
  return (
    <Container>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h5>Carregando...</h5>
    </Container>
  );
};
