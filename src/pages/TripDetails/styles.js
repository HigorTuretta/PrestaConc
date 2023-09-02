import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    margin: 0 auto;
    max-width: 720px;
    padding: 2rem;
  }
`;

export const Title = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Slab', serif;
    font-size: 2rem;
  }
  > h2 {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.5rem;
    margin: 1.5rem 0 0 0;

    img{
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
    }
  }
`;

export const CardArea = styled.div`
display: flex;
justify-content:space-around;
align-items:center;
padding: 1rem 0 ;
gap: 0.5rem;
`
