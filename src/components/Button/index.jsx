import { Container } from "./styles";
import { Loading } from "../Loading";

export function Button({ title, icon: Icon, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {Icon && <Icon size={20} />}
          {title}
        </>
      )}
    </Container>
  );
}
