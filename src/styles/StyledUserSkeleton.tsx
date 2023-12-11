import styled from "styled-components";

export const StyledUserSkeleton = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .skeleton-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    padding: 5px;
  }

  .skeleton-image {
    max-width: 150px;
    max-height: 150px;
    height: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .skeleton-info {
    width: 100%;
  }
`;
