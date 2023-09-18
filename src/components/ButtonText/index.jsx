import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function ButtonText({ title, isAtive = false, goTo, ...rest }) {
  
    const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(goTo)}
      type="button"
      $isactive={isAtive}
      disabled={!isAtive}
      {...rest}
    >
      {title}
    </Container>
  );
}
