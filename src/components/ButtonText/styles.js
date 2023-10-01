import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $white }) =>
    $white ? theme.COLORS.WHITE : theme.COLORS.BLUE};
  border: none;
  font-size: 1rem; 
  font-weight: 700;
  cursor: ${({ $isactive }) => ($isactive ? "pointer" : "not-allowed")};
`;
