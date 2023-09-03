import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  height: 6rem;
  padding: 1rem;
  background: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.YELLOW};
  border: ${({ theme, $isnew }) => ($isnew ? theme.COLORS.YELLOW : "none")} 1px
    dashed;
`;

export const InvoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto Slab", serif;
  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};
  > p {
    font-size: 0.8rem;
  }
`;

export const InvoiceDetails = styled.div`
  font-family: "Roboto Slab", serif;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 2.2rem;

  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};

  > input:first-child {
    width: 60%;
    text-align: left;
  }
  > input:last-child {
    width: 40%;
    text-align: right;
  }
  > input {
    color: ${({ theme, $isnew }) =>
      $isnew ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};

    background: none;
    outline: none;
    border: none;
  }
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  outline: none;
  color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};
  > svg {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.YELLOW : theme.COLORS.BACKGROUND_900};
`;
