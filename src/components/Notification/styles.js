import styled, { css, keyframes } from "styled-components";

const slideInRightKeyframes = keyframes`
  0% {
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRightKeyframes = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(1000px);
    opacity: 0;
  }
`;

export const NotificationWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 16rem;
  height: 4rem;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  animation: ${({ $isvisible }) =>
    $isvisible
      ? css`
          ${slideInRightKeyframes} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        `
      : css`
          ${slideOutRightKeyframes} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both
        `};
  background-color: ${({ $type }) =>
    $type === "error"
      ? ({ theme }) => theme.COLORS.RED
      : ({ theme }) => theme.COLORS.GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    height: 100%;
    width: 4rem;
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > span {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    font-family: Roboto Slab;
  }
`;
