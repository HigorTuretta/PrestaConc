import { Container } from "./styles";

export function Input({ title, colorTheme = false ,icon: Icon, ...rest }) {
  return (
    <Container $colortheme={colorTheme}>
      <label>{title}</label>
      <div>
        {Icon && <Icon size={20}/>}
        <input {...rest} />
      </div>
    </Container>
  );
}
