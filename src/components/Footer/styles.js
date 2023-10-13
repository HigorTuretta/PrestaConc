import styled from "styled-components";

export const Container = styled.footer`
  bottom: 0;
  position: fixed;
  height: 40px;
  width: 100%;
  border-top: 1px solid
    ${({ theme, $color }) =>
      $color == "white" ? theme.COLORS.WHITE : theme.COLORS.BLACK};
  display: flex;
  background-color: ${({ theme, $color }) =>
    $color == "white" ? theme.COLORS.BLUE : theme.COLORS.WHITE};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  > div:first-child {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme, $color }) =>
      $color == "white" ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    padding: 0 1rem;
    display: flex;
    align-items: center;
    p {
      font-size: 0.8rem;
    }

    svg {
      margin-right: 0.5rem;
      animation: rotate-center 10s linear infinite both;
      @keyframes rotate-center {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }

  > div:last-child {
    font-family: "Montserrat", sans-serif;
    color: ${({ theme, $color }) =>
      $color == "white" ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > a {
      color: ${({ theme, $color }) =>
        $color == "white" ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    }
  }
`;
