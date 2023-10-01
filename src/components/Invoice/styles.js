import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
`;

export const InvoiceDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 2rem;

  > div span {
    font-weight: 500;
  }

  >div svg{
    margin-right: 10px;
    font-size: 22px;
    color: ${({theme}) => theme.COLORS.BLACK}
  }
  > span {
    font-weight: 700;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;
