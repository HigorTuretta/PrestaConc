import styled from "styled-components";
export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  padding-left: 2rem;
`;

export const Profile = styled.a`
  display: flex;
  align-items: center;
  flex: 1;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
  @media screen and (max-width: 870px) {
    > div {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  font-family: "Play", sans-serif;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 2;
  margin-left: -2rem;
`;


export const Logout = styled.button`
  border: none;
  background: none;
  flex: 1;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
  }
`;
