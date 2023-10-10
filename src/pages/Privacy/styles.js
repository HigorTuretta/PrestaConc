import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.COLORS.BLUE};
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 720px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  text-align: justify;
  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.5rem;
  }
  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 1.5rem 0;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
