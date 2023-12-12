import { useParams, useNavigate } from "react-router-dom";
import { StyledSection } from "../../styles/StyledCharts";
import { useFetchData } from "../../hook/useFetchData";
import Languages from "./Languages";
import Topics from "./Topics";
import Starred from "./Starred";

type Data = {
  language: string;
  topics: string[];
  name: string;
  stargazers_count: number;
};

type StarredObject = {
  name: string;
  stars: number;
};

const Charts: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const url: string = `https://api.github.com/users/${params.user}/repos`;
  const { data, error, loading } = useFetchData<Data[]>(url);

  if (error) {
    if (error.status === 404) navigate("/404");
    if (error.status === 403) navigate("/403");
  }

  if (!data || !Array.isArray(data)) {
    return;
  }

  const topics: string[] = [];
  const languages: string[] = [];
  const starred: StarredObject[] = [];

  data.forEach((element) => {
    // Get Topics
    element.topics.forEach((item) => topics.push(item));

    // Get Languages
    element.language
      ? languages.push(element.language)
      : languages.push("Other");

    // Get Starred Projects
    if (element.stargazers_count != 0) {
      starred.push({
        name: element.name,
        stars: element.stargazers_count,
      });
    }
  });

  return (
    <StyledSection>
      <div className="charts">
        <div className="circular-charts">
          {loading ? (
            <p>loading</p>
          ) : (
            <>
              <div>
                <h1>Most Used Languages</h1>
                <Languages data={languages} />
              </div>
              <div>
                <h1>Star per Project</h1>
                <Starred data={starred} />
              </div>
            </>
          )}
        </div>

        <div className="rectangular-charts">
          {loading ? (
            <p>loading</p>
          ) : (
            <div>
              <h1>Most Used Topic</h1>
              <Topics data={topics} />
            </div>
          )}
        </div>
      </div>
    </StyledSection>
  );
};

export default Charts;
