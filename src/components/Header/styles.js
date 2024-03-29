import styled from "styled-components";
export const Container = styled.header`
  grid-area: header;
  height: 90px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 4px 4px 0px rgba(80, 136, 249, 0.26);
`;

export const Logo = styled.div`  
  > a {
    color: ${({ theme }) => theme.COLORS.BLUE};
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 3rem;
    text-shadow: -3px 3px rgba(245, 243, 245, 0.3);
  }
`;

export const LinkArea = styled.div`
display: flex;
`;

export const Profile = styled.button`
  border: none;
  background: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 2rem;
  }
`;

export const Contact = styled.button`
  border: none;
  background: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-right: 1rem;
  > svg {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 2rem;
  }
  >span{
    font-size: 14px;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  justify-content:center;
  align-items:center;
  > svg {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 2rem;
  }
  >span{
    font-size: 14px;
  }
`;
