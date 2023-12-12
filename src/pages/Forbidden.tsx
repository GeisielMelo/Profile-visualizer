import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hook/useFetchData";
import { StyledSection } from '../styles/StyledForbidden'

type DataStrings = {
  limit: number;
  remaining: number;
};

type DataObject = {
  core: DataStrings;
};

type Data = {
  resources: DataObject;
};

const Forbidden: React.FC = () => {
  const navigate = useNavigate();
  const url: string = "https://api.github.com/rate_limit";
  const { data, error, loading } = useFetchData<Data>(url);

  if (!data) return;

  const handleEvalPercent = (): number => {
    const limit: number = data.resources.core.limit;
    const remaining: number = data.resources.core.remaining;
    const evaluation: number = (remaining / limit) * 100;
    return Math.floor(evaluation);
  };

  return (
    <StyledSection>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <img src="" alt="" />
          <h1>Remaining</h1>
          <p>{error ? "No data found" : handleEvalPercent()}</p>
          <button onClick={() => navigate("/")}>Home</button>
        </div>
      )}
    </StyledSection>
  );
};

export default Forbidden;
