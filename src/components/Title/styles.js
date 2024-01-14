import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: "Montserrat", sans-serif;

  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;

  > h1 {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 26px;
  }
`;
