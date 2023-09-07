import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: ${({ $returnButton }) =>
    $returnButton ? "space-evenly" : "center"};
  align-items: center;
  margin-top: 2rem;
  padding: 0 2rem;

  @media screen and (max-width:450px) {
     flex-direction: column;
    }

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Slab", serif;
    font-size: 2rem;

    
  @media screen and (max-width:450px) {
     margin-bottom: 1rem;
    }

    @media screen and (max-width:350px) {
     font-size: 1.5rem;
    }
  }
`;
