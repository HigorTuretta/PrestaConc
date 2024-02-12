import styled from "styled-components";

export const Container = styled.footer`
  height: 100px;
  width: 100vw;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 5px 0px 0px 1px white;

  @media screen and (max-width: 600px) {
    height: 70px;
  }
`;

export const Devarea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;

    > a > svg {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Montserrat", sans-serif;
    font-size: 0.7rem;
    text-align: center;
  }
  > img {
    width: 150px;
  }

  @media screen and (max-width: 600px) {
    flex: 2;
    >img{
      width: 100px;
    }
  }
`;

export const Infoarea = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  > p {
    font-size: 0.8rem;

    > a {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
  @media screen and (max-width: 600px) {
    flex: 2;
  }
`;
