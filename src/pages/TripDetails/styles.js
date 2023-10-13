import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding: 1rem 1rem 5rem 1rem;
  grid-area: content;
  max-width: 720px;
`;

export const DateArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const ValueArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InvoiceInputArea = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;

  > .description {
    flex: 0.6;
  }

  > .notDescription {
    flex: 0.2;
  }
`;

export const InvoiceArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
