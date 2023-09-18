import { Container, Profile, Logout, Logo } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import avatarUrl from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Profile to="">
        <img src={avatarUrl} alt="Foto do usário" />
        <div>
          <span>Olá,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
        <Logo>
          <h1>CALKY</h1>
        </Logo>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
