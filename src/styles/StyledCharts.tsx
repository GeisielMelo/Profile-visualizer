import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;

  h1 {
    text-align: center;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Noto Sans", sans-serif;
  }

  .charts {
    max-width: 800px;
    width: 100%;
    padding: 20px;
  }

  .circular-charts {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    div {
      padding: 10px;
      margin: 10px;
      max-width: 340px;
      width: 100%;
      background-color: #fff;
      border-radius: 0.5em;
      box-shadow: hsla(0, 0%, 0%, 0.2) 0px 0px 4px 2px;

      @media (max-width: 768px) {
        max-width: 420px;
        margin: 10px 0;
      }
    }
  }

  .rectangular-charts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      padding: 10px;
      margin: 10px 0;
      max-width: 700px;
      width: 100%;
      background-color: #fff;
      border-radius: 0.5em;
      box-shadow: hsla(0, 0%, 0%, 0.2) 0px 0px 4px 2px;

      @media (max-width: 768px) {
        max-width: 420px;
      }
    }
  }
`;
