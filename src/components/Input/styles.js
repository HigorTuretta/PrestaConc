import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  > label {
    color: ${({ theme }) => theme.COLORS.WHITE};
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

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      padding: 12px;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
    > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-left: 12px;
    }
  }
`;
