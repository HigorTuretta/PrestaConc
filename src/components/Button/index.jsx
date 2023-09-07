import { Container } from "./styles";
import { Loading } from "../Loading";

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? <Loading /> : title}
    </Container>
  );
}
