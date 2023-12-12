import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: rgb(26, 30, 34);
  }

  button {
    &:hover{
      cursor: pointer;
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  /* Custom scrollbar for WebKit (Chrome, Safari) */
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(136, 146, 176);
    border-radius: none;
  }

  /* Custom scrollbar for Firefox */
  scrollbar-width: thin;
  scrollbar-color: rgb(136, 146, 176) #071952;
  overflow-y: scroll;
`;
