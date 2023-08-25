import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  flex-direction: column;

  > main {
    max-width: 720px;
    grid-area: content;
    padding: 0 2rem 3rem 2rem ;

    h1{
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        font-size: 2rem;
        text-align: center;
        padding: 1.5rem 0 ;
    }
  }
  
`;

export const Form = styled.form`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  flex-direction: column;

  > .formSectionRow {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;

    @media screen and (max-width:650px){
        flex-wrap: wrap;
    }
  }
`;
