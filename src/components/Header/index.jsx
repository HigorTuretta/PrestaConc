import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import avatarUrl from '../../assets/avatar.jpg'

export function Header() {
  return (
    <Container>
      <Profile to="">
        <img src={avatarUrl} alt='Foto do usário' />
        <div>
          <span>Bem vindo</span>
          <strong>Higor Turetta</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
