import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLUE};
  overflow: hidden;
`;

export const Content = styled.section`
  width: 100%;
  min-height: 100vh;
  max-width: 720px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export const ContentDescription = styled.section`
  width: 100%;
  max-width: 720px;
  padding: 1.5rem 1.5rem 4rem 1.5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);

  >h2{
    padding: 1rem 0 0 0;
  }
  >p {
    margin-top: 1rem;
    text-align: left;
  }
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  height: 20%;
  text-align: center;
  cursor: default;
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

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;

  > h4 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
