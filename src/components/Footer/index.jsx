import { Container, Devarea, Infoarea } from "./styles";
import { FaLinkedinIn, FaSquareGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Brand from "../../assets/BrandWhite.png";
export function Footer() {
  const navigate = useNavigate();

  function handleContact() {
    navigate("/contact");
  }

  return (
    <Container>
      <Devarea>
        <img src={Brand} alt="Turreta Logo" />
        <div>
          <a
            href="https://www.linkedin.com/in/higor-turetta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/HigorTuretta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub />
          </a>
        </div>
      </Devarea>
      <Infoarea>
        <p>
          Você pode apontar erros ou dar sugestões{" "}
          <a onClick={handleContact}>clicando aqui.</a>
        </p>
      </Infoarea>
    </Container>
  );
}
