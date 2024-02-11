import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 100vh;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 3rem 1rem;
  flex-grow: 1; /* Faz com que o Content ocupe o espaço disponível verticalmente */

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
