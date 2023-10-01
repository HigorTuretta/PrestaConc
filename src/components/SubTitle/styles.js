import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
 
  > .line {
   margin: 5px 0 1rem 0 ;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-family: "Montserrat", sans-serif;
    font-size: 18px;

    img {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
  }

  > button {
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: solid 1px ${({ theme }) => theme.COLORS.RED};
    color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 5px;
    text-align: center;
  }
`;
