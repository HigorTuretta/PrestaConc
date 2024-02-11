import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.BLUE};
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  min-height: 100vh;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 720px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 20%;
  text-align: center;
  > h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 900;
    font-size: 6rem;
    text-shadow: -3px 3px rgba(245, 243, 245, 0.3);
  }
  > p {
    font-size: 12px;
    margin: -1.2rem 3.5rem 0 0;
  }
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: justify;
    margin-bottom: 1rem;
  }
`;


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PasswordChangeForm = styled.div`

`
