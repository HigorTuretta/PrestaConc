import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 1000;
`;

export const ModalArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  max-width: 720px;
  min-height: 10rem;
  border-radius: 15px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-family: Roboto Slab;
`;

export const MessageArea = styled.div`
  padding: 2rem;

  >svg{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 0 0 15px 15px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > button {
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
  }
  > button:first-child {
    background-color: #42ab59;
  }
  > button:last-child {
    border: 1px solid ${({ theme }) => theme.COLORS.RED};
    background-color: transparent;
  }
`;
