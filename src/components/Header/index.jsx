import { Container, Logout, Logo, LinkArea, Profile} from "./styles";
import { FaDoorOpen, FaUser } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Logo>
        <a>Calky</a>
      </Logo>
      <LinkArea>
      <Profile>
        <FaUser/>
        <span>Perfil</span>
      </Profile>
      <Logout onClick={handleSignOut}>
        <FaDoorOpen />
        <span>Sair</span>
      </Logout>
      </LinkArea>
     
    </Container>
  );
}
