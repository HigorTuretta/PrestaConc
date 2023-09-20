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
  width: 15rem;
  height: 4rem;
  padding: 10px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  animation: ${({ $isvisible }) =>
    $isvisible ? css`${slideInRightKeyframes} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both` : css`${slideOutRightKeyframes} 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both`};
  background-color: ${({ $type }) =>
    $type === "error" ? ({ theme }) => theme.COLORS.RED : ({ theme }) => theme.COLORS.GREEN};
  color: #fff;
`;
