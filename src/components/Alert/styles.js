import styled, { keyframes, css } from "styled-components";

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1rem 0;
  border-radius: 5px;
  cursor: default;

  opacity: 1;
  transition: opacity 0.5s ease;

  ${({ $isvisible }) =>
    !$isvisible &&
    css`
      animation: ${fadeOut} 0.5s forwards;
    `}

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Montserrat", sans-serif;
    padding: 1rem;
    font-size: 14px;
    max-width: 80%;
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: darkgreen;
    width: 10%;
    height: 70px;
    border-radius: 5px;
    > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > .closeButton {
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    background-color: transparent;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
