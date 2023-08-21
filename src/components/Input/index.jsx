import { Container } from "./styles";

export function Input({ title,  icon: Icon, ...rest }) {
  return (
    <Container>
      <label>{title}</label>
      <div>
        {Icon && <Icon size={20}/>}
        <input {...rest} />
      </div>
    </Container>
  );
}
