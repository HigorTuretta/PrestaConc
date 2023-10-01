import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  font-family: "Montserrat", sans-serif;
  &:hover {
    filter: brightness(0.9)
  }
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  height: 5rem;
  padding: 12px;
  border-radius: 5px;
  background: ${({theme}) => theme.COLORS.BLUE};
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);

`;

export const City = styled.div`
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 50%;
  > span {
    font-size: 12px;
    font-weight: 400;
  }
  > h4 {
    font-size:18px;
    font-weight: 700;
  }
`;

export const TripData = styled.div`
  font-weight: 400;
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;

  > div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    p{
      font-size: 12px;
    }
  }
`;
