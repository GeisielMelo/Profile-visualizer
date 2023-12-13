import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StyledRepositoriesSkeleton } from "../../styles/StyledRepositoriesSkeleton";

const RepositoriesSkeleton: React.FC = () => {
  const elements: number[] = Array.from({ length: 8 });
  return (
    <StyledRepositoriesSkeleton>
      {elements.map((_, index) => (
        <div key={index} className="card">
          <Skeleton height={200} />
        </div>
      ))}
    </StyledRepositoriesSkeleton>
  );
};

export default RepositoriesSkeleton;
