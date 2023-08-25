import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ $colortheme, theme }) =>
      !$colortheme ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};
    font-family: Roboto Slab;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 0 10px 10px 10px;
    border: 1px solid
      ${({ $colortheme, theme }) =>
        !$colortheme ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};

    input {
      width: 100%;
      height: 40px;
      margin: 0 5px;
      border: none;
      outline: none;
      padding: 16px;
      background: ${({ $colortheme, theme }) =>
        $colortheme ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};
      color: ${({ $colortheme, theme }) =>
        !$colortheme ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};
    }

    > svg {
      color: ${({ $colortheme, theme }) =>
        !$colortheme ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};
      margin-left: 12px;
    }
  }
`;
