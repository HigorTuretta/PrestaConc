import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;;
  padding: 0.5rem;
  border-radius: 0.625rem;
  background: ${({$isred}) => $isred ? '#D74646':'#42AB59'};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > h1 {
    color: #fff;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  > h5 {
    color: #fff;
    text-align: center;
    font-family: "Roboto Condensed", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 0.5rem;
  }
`;
