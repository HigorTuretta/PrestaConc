import styled from "styled-components";
import backgroundImg from "../../assets/authBackground.jpeg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.COLORS.BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
  height: 100vh;
  max-width: 720px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }
`;


export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 20%;
  text-align: center;
  > h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 6rem;
    text-shadow: -3px 3px rgba(245, 243, 245, 0.30);;
  }
  >p{
    font-size: 12px;
    margin: -1.2rem 3.5rem 0 0;

  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 65%;

  > h4 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(0.6);

  @media (max-width: 1000px) {
    display: none;
  }
`;
