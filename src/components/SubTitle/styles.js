import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > h2 {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.5rem;
    margin: 1.5rem 0 0 0;

    img {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
`;