import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme, $white }) =>
      $white ? theme.COLORS.WHITE : theme.COLORS.BLACK};
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0 10px 10px 10px;
    border: 1px solid
      ${({ theme, $white }) => ($white ? "none" : theme.COLORS.BLACK)};
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    input {
      width: 100%;
      height: 40px;
      margin: 0 5px;
      border: none;
      outline: none;
      padding: 16px;
      font-family: "Montserrat", sans-serif;
      background: ${({ theme }) => theme.COLORS.WHITE};
      color: ${({ theme }) => theme.COLORS.BLACK};
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.BLACK};
      margin-left: 12px;
    }
  }
`;
