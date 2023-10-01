import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function ButtonText({ title, isAtive = false, white = false ,goTo, ...rest }) {
  
    const navigate = useNavigate();

  return (
    <Container
      onClick={() => navigate(goTo)}
      type="button"      
      disabled={!isAtive}
      $isactive={isAtive}
      $white={white}
      {...rest}
    >
      {title}
    </Container>
  );
}
