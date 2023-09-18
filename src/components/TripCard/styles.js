import styled from "styled-components";
import imgCard from "../../assets/travel.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 350px;
  cursor: pointer;
  transition: all 0.3s;
  margin: 10px 0;
  border: none;
  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const Description = styled.div`
  width: 25rem;
  height: 5rem;
  padding: 12px;
  border-radius: 5px;
  background: url(${imgCard});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const City = styled.div`
  font-family: Roboto Slab;
  color: ${({ theme }) => theme.COLORS.WHITE};
  > span {
    font-size: 0.8rem;
    font-weight: 400;
  }
  > h4 {
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const TripData = styled.div`
  font-family: Roboto Slab;
  font-weight: 400;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;

  > div {
    display: flex;
    gap: 0.5em;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.8rem;
  }
`;
