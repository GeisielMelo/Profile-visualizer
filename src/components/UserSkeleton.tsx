// UserSkeleton.tsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StyledUserSkeleton } from "../styles/StyledUserSkeleton";

const UserSkeleton = () => {
  return (
    <StyledUserSkeleton>
      <div className="skeleton-profile">
        <div className="skeleton-image">
          <Skeleton circle height={150} />
        </div>
        <div className="skeleton-info">
          <Skeleton height={60} count={4} style={{margin: '5px'}}/>
        </div>
      </div>
    </StyledUserSkeleton>
  );
};

export default UserSkeleton;
