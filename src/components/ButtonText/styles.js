import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, $isactive }) =>
    $isactive ? theme.COLORS.BLUE_100 : theme.COLORS.GRAY_100};
  border: none;
  font-size: 16px; 
  cursor: ${({ $isactive }) => ($isactive ? "pointer" : "not-allowed")};
`;
