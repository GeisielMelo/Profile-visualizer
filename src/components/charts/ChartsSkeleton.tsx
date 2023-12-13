import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { StyledChartsSkeleton } from "../../styles/StyledChartsSkeleton";

const ChartsSkeleton: React.FC = () => {
  return (
    <StyledChartsSkeleton>
      <div className="top">
        <div className="small">
          <Skeleton height={400} />
        </div>
        <div className="small">
          <Skeleton height={400} />
        </div>
      </div>
      
      <div className="bottom">
        <Skeleton height={400} />
      </div>
    </StyledChartsSkeleton>
  );
};

export default ChartsSkeleton;
