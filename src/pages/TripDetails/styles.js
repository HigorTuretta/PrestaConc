import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > main {
    grid-area: content;
    margin: 0 auto;
    max-width: 720px;
    padding: 2rem;
  }
`;

export const CardArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
`;

export const InvoiceArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  gap: 0.5rem;
  flex-wrap: wrap; 
`;
