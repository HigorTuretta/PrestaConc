import styled from "styled-components";
import backgroundImg from "../../assets/authBackground.jpeg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: row;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 20vh;
  > h1 {
    font-family: "Play", sans-serif;
    font-size: 4rem;
    letter-spacing: 5px;
    text-shadow: ${({theme})=> theme.COLORS.BLUE_100}  3px 3px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  width: 50%;
  padding: 0 5rem;
  height: 100vh;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 2rem;
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
