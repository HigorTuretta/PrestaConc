import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0.5rem;
  border-radius: 0.625rem;
  background: ${({ theme }) => theme.COLORS.BLUE_100};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > h5 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 680px) {
    height: 100%;
  }
`;

export const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: "Roboto Condensed", sans-serif;
    margin: 0 0.4rem;
  }

  >input{
    all: unset;
    background-color: transparent;
    outline: none;
    font-family: "Roboto Slab";
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  >input:focus{
    outline: none;
    background-color: transparent;
  }
  
  @media screen and (max-width: 680px) {
    flex-wrap: wrap;
  }
`;
