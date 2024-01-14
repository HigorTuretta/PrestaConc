import styled from "styled-components";

export const Container = styled.div`
  font-family: "Montserrat", sans-serif;
  text-align: ${({ $isbalance }) => ($isbalance ? "right" : "left")};
  margin: 1rem 0;
  > h1 {
    color: ${({ theme, $isred, $isbalance }) =>
      $isred
        ? theme.COLORS.RED
        : $isbalance
        ? theme.COLORS.GREEN
        : theme.COLORS.BLUE};
    font-size: 1.5rem;
    font-weight: 700;
  }
  > span {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    font-weight: 700;F
  }
`;
