import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function ButtonText({ title, isAtive = false, ...rest }) {
  
    const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(-1)}
      type="button"
      $isactive={isAtive}
      disabled={!isAtive}
      {...rest}
    >
      {title}
    </Container>
  );
}
