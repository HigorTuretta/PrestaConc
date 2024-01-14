import { Container } from "./styles";
import { FaReact, FaLinkedinIn, FaSquareGithub } from "react-icons/fa6";

export function Footer({color = "white"}) {
  return (
    <Container $color={color}>
      <div>
        <FaReact />
        <p>Sistema em desenvolvimento.</p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/higor-turetta/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/HigorTuretta" target="_blank" rel="noopener noreferrer">
          <FaSquareGithub />
        </a>
      </div>
    </Container>
  );
}
