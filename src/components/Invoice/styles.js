import styled from "styled-components";

export const Container = styled.div`
  width: 16rem;
  height: 6rem;
  padding: 1rem;
  background: ${({ theme, $isnew }) =>
    $isnew ? theme.COLORS.BACKGROUND_900 : theme.COLORS.YELLOW};
  border: ${({ theme, $isnew }) => ($isnew ? theme.COLORS.YELLOW : "none")} 1px
    dashed;

  .tilt-in-fwd-tl {
    animation: tilt-in-fwd-tl 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @keyframes tilt-in-fwd-tl {
    0% {
      transform: rotateY(-20deg) rotateX(35deg) translate(-300px, -300px)
        skew(35deg, -10deg);
      opacity: 0;
    }
    100% {
      transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
      opacity: 1;
    }
  }
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
