import styled from "styled-components";

export const StyledRepositoriesSkeleton = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 1300px;
  width: 100%;

  .card {
    max-width: 350px;
    width: 100%;
    margin: 10px;
    @media (max-width: 779px) {
      max-width: 100%;
    }
  }
`;
