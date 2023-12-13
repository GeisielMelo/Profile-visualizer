import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: rgb(26, 30, 34);

  a,span {
    margin: 5px 20px;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    color: rgb(88, 96, 105);
    transition: color 0.2s ease-in-out;
    &:hover {
      color: rgb(200, 225, 255);
      cursor: pointer;
    }
  }
`;
