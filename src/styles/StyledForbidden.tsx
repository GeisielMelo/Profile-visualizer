import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  height: calc(100dvh - 50px);
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 2rem;

    img {
      max-width: clamp(120px, 16vw, 200px);
    }
    h1 {
      display: block;
      margin: 2rem;

      font-family: "Inter", sans-serif;
      font-size: clamp(20px, 8vw, 2.5rem);
      font-weight: 500;
      color: rgb(246, 248, 250);
      text-align: center;
    }
    p {
      font-family: "Inter", sans-serif;
      font-size: clamp(12px, 5vw, 1rem);
      font-weight: 400;
      text-align: center;
      color: rgb(246, 248, 250);
      margin: 5px 0;
    }
    span {
      text-align: center;
      color: rgb(121, 184, 255);
    }
    .span-hover:hover {
      cursor: pointer;
    }
  }
`;
