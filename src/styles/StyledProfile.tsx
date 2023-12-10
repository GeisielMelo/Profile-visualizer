import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  margin-top: 50px;

  max-width: 500px;
  width: 100%;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 10px;
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
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: rgb(246, 248, 250);
  }

  .profile-github {
    color: rgb(0, 112, 243);
  }

  .profile-social {
    display: flex;
    margin: 20px 0;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      max-width: 120px;
      width: 100%;
      margin: 0 20px;
      padding: 20px;
      background-color: rgb(36, 41, 46);
    }
    h1 {
      margin-bottom: 10px;
    }
  }
`;
