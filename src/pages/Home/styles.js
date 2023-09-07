import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 0 64px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    max-width: 720px;
    margin: 0 auto;

    .button-area{
      width: 80%;
      margin: 0 0 2rem 0;
    }
  }
`;
