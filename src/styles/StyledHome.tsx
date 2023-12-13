import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  height: calc(100dvh - 50px);

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 500px;
    padding: 2rem;

    img {
      max-width: clamp(100px, 10vw, 200px);
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
    div {
      display: flex;
      width: 100%;
    }
    input {
      width: 100%;
      margin: 0px auto;
      padding: 1rem;
      outline: 0px;

      border: 0px;
      border-radius: 0.25rem;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-color: rgb(38, 48, 60);

      font-family: "Inter", sans-serif;
      font-size: 2rem;
      font-weight: 400;
      text-align: center;
      color: rgb(121, 184, 255);
    }
    button {
      padding-right: 15px;
      border: 0px;
      border-radius: 0.25rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: rgb(38, 48, 60);
      color: rgb(246, 248, 250);
    }
  }
`;
