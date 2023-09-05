import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
  }
`;
