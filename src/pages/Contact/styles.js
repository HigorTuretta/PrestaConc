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
  padding: 1rem 1rem 3rem 1rem;
  flex: 1; /* Faz com que o Content ocupe o espaço disponível verticalmente */
  overflow: hidden; /* Impede que o Content role */

  > label {
    margin-top: 1rem;
  }
  > textarea, > textarea:not([style*="padding"]) {
    resize: vertical;
    font-family: "Montserrat", sans-serif;
    background: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.BLACK};
    border-radius: 0 10px 10px 10px;
    border: 1px solid ${({ theme, $white }) => ($white ? "none" : theme.COLORS.BLACK)};
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 10px; // Tenta forçar o padding
    margin: 0; // Define a margem explicitamente
    box-sizing: border-box; // Garante que o padding não aumente o tamanho do elemento
  }

  > :last-child {
    padding: 0;
  }
`;
