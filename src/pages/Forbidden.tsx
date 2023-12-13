import { useNavigate } from "react-router-dom";
import { useFetchData } from "../hook/useFetchData";
import { StyledSection } from "../styles/StyledForbidden";
import Footer from "../components/footer/Footer";

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

  if (error) navigate("/404");

  if (!data) return;

  const handleEvalPercent = (): number => {
    const limit: number = data.resources.core.limit;
    const remaining: number = data.resources.core.remaining;
    const evaluation: number = ((limit - remaining) / limit) * 100;
    return Math.floor(evaluation);
  };

  return (
    <>
      <StyledSection>
        {loading ? (
          <div>loading</div>
        ) : (
          <div className="container">
            <img src="/github.svg" alt="GitHub Logo" />
            {handleEvalPercent() > 95 ? (
              <>
                <h1>Ops!</h1>
                <p>It appears that you have reached the request limit.</p>
                <p>Wait a few minutes and try again.</p>
                <p>Request consumption: {handleEvalPercent()}%</p>
              </>
            ) : (
              <>
                <h1>Request Limit</h1>
                <p>Here, you can check your current request limit.</p>
                <p>
                  Request consumption: <span>{handleEvalPercent()}%</span>
                </p>
              </>
            )}

            <p>
              <span className="span-hover" onClick={() => navigate("/")}>
                Go back to home.
              </span>
            </p>
          </div>
        )}
      </StyledSection>
      <Footer />
    </>
  );
};

export default Forbidden;
