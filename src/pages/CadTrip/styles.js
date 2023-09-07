import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  > main {
    max-width: 720px;
    grid-area: content;
    padding: 0 2rem 3rem 2rem ;
    margin: 0 auto;
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
