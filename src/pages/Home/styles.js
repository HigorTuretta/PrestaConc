import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Impede que a página inteira role */
`;

export const Content = styled.section`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1; /* Faz com que o Content ocupe o espaço disponível verticalmente */
  overflow: hidden; /* Impede que o Content role */

  >:last-child{
    padding: 0;
  }
`;

export const TripsArea = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto; /* Adiciona rolagem vertical apenas quando necessário */
  padding: 1rem;
`;
