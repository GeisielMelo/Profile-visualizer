import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 20px;

  @media (max-width: 779px) {
    padding: 10px;
  }

  .card-btn {
    margin-top: 10px;
    padding: 10px 20px;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 1px 5px;
    border-radius: 0.5em;
    transition: box-shadow 0.2s ease-in-out, color 0.3s ease-in-out;
    &:hover{
      box-shadow: rgba(0, 102, 255, 0.7) 0px 1px 5px;
      color: rgba(0, 102, 255, 0.7);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: "Noto Sans", sans-serif;
  }

  p {
    color: rgb(88, 96, 105);
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
  }

  .card {
    position: relative;
    max-width: 350px;
    width: 100%;
    margin: 10px;
    padding: 20px 20px 50px;
    border-radius: 0.5em;
    box-shadow: rgba(2, 12, 27, 0.7) 0px 1px 5px;

    @media (max-width: 779px) {
      max-width: 100%;
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }

  .card-buttons {
    display: flex;
    gap: 5px;
    button {
      background: none;
      color: rgb(88, 96, 105);
      transition: color 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        color: rgb(106, 115, 125);
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 20px;
    width: calc(100% - 40px);
    color: rgb(106, 115, 125);
    font-size: 14px;
    font-family: "Noto Sans", sans-serif;
    span {
      display: flex;
      align-items:center;
      justify-content: center;
      gap:5px;
    }
  }
`;
