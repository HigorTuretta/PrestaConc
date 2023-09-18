import styled from "styled-components";

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

export const Image = styled.img`
  width: 27.8125rem;
  height: 6.0625rem;
  flex-shrink: 0;
  border: none;
  border-radius: 0.625rem;
  background: url(${({ $url }) => $url}) 50% / cover no-repeat;
  background-position: center 40%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  filter: brightness(0.8);

  @media (max-width: 520px) {
    width: 90%;
  }
`;

export const Description = styled.div`
  width: 25.6875rem;
  height: 3.625rem;
  padding: 12px;
  border-radius: 0rem 0rem 0.3125rem 0.3125rem;
  background: ${({ theme }) => theme.COLORS.BLUE_100};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: Roboto Slab;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (max-width: 520px) {
    width: 80%;
  }
`;
