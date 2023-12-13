import styled from "styled-components";

export const StyledChartsSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  padding: 20px;

  .top {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    width: 100%;
    gap: 20px;

    .small {
      max-width: 340px;
      width: 100%;
      @media (max-width: 739px) {
        max-width: 100%;
      }
    }
  }

  .bottom {
    margin: 20px 0;
    max-width: 700px;
    width: 100%;
  }
`;
