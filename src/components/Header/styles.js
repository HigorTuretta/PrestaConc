import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};

  display: flex;
  justify-content: space-between;
  padding: 0 80px;
`;

export const Profile = styled.a`
  display: flex;
  align-items: center;

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
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
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 36px;
  }
`;
