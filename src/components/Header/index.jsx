import { Container, Logout, Logo, LinkArea, Profile, Contact} from "./styles";
import { FaDoorOpen, FaUser, FaBullhorn } from "react-icons/fa";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate('/')
  }

  function handleContact(){
    navigate('/contact');
  }

  return (
    <Container>
      <Logo>
        <a href="/">Calky</a>
      </Logo>
      <LinkArea>
      {/* <Profile>
        <FaUser/>
        <span>Perfil</span>
      </Profile> */}
      {/* <Contact onClick={handleContact}>
        <FaBullhorn/>
        <span>Sugestões</span>
      </Contact> */}
      <Logout onClick={handleSignOut}>
        <FaDoorOpen />
        <span>Sair</span>
      </Logout>
      </LinkArea>
     
    </Container>
  );
}
