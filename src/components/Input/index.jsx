import { Container } from "./styles";

export function Input({ title, white = false ,icon: Icon, ...rest }) {
  return (
    <Container $white={white}>
      <label>{title}</label>
      <div>
        {Icon && <Icon size={20}/>}
        <input {...rest} />
      </div>
    </Container>
  );
}
