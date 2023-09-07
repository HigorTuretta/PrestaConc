import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import avatarUrl from '../../assets/avatar.jpg'
import { useAuth} from '../../hooks/auth'
import { useNavigate } from "react-router-dom";
export function Header() {

  const { signOut, user} = useAuth()
  const navigate = useNavigate()

  function handleSignOut(){
    navigate('/')
    signOut();
  }

  return (
    <Container>
      <Profile to="">
        {/* <img src={avatarUrl} alt='Foto do usário' /> */}
        <div>
          <span>Bem vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
