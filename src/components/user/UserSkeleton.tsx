import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StyledUserSkeleton } from "../../styles/StyledUserSkeleton";

const UserSkeleton: React.FC = () => {
  return (
    <StyledUserSkeleton>
      <div className="skeleton-image">
        <Skeleton circle height={150} />
      </div>
      <div className="skeleton-info">
        <Skeleton height={60} />
      </div>
      <div className="skeleton-info">
        <Skeleton height={60} />
      </div>
      <div className="skeleton-info">
        <Skeleton height={60} />
      </div>
      <div className="skeleton-info">
        <Skeleton height={60} />
      </div>
    </StyledUserSkeleton>
  );
};

export default UserSkeleton;
