import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  height: 100dvh;
`;

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 500px;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;

    font-size: 14px;
    font-family: "Inter", sans-serif;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: rgb(200, 225, 255);
      gap: 5px;
    }
  }

  .profile-image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    border: 0.5rem solid rgb(0, 112, 243);
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 100%;
      vertical-align: middle;
    }
  }

  .profile-name {
    font-size: clamp(20px, 8vw, 2.5rem);
    margin-bottom: 10px;
    color: rgb(246, 248, 250);

    font-weight: 700;
    letter-spacing: -0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Inter", sans-serif;
  }

  .profile-github {
    color: rgb(0, 112, 243);
  }

  .profile-github:first-letter {
    text-transform: uppercase;
    font-size: 14px;
    font-family: "Inter", sans-serif;
  }

  .profile-bio {
    text-align: center;
    padding: 10px;
    color: rgb(200, 225, 255);
    word-wrap: break-word;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    max-width: 500px;
    width: 100%;
  }

  .profile-social {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      max-width: 120px;
      width: 100%;
      margin: 0 10px;
      padding: 20px;
      background-color: rgb(36, 41, 46);
      box-shadow: rgba(2, 12, 27, 0.7) 0px 2px 5px;
      border-radius: 0.5em;

      @media (max-width: 779px) {
        max-width: 100px;
        margin: 10px;
      }
    }
    h1 {
      margin-bottom: 10px;
      color: rgb(246, 248, 250);
      font-size: 16px;
      font-family: "Noto Sans", sans-serif;
    }
    p {
      color: rgb(200, 225, 255);
      font-size: 14px;
      font-family: "Inter", sans-serif;
    }
  }
`;
