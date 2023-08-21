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

    h1 {
      font-size: 2rem;
      font-weight: 600;
      font-family: "Roboto Slab", serif;
      font-weight: 700;
      margin: 2rem 0;
      letter-spacing: 1px;
      text-rendering: optimizeLegibility;
    }
  }
`;
