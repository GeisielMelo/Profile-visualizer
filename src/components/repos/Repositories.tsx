import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchData } from "../../hook/useFetchData";
import { StyledSection, Container } from "../../styles/StyledRepositories";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";

type Data = {
  id: string;
  name: string;
  homepage: string;
  description: string;
  language: string;
  html_url: string;
  stargazers_count: number;
}

const Repositories: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [maxCards, setMaxCards] = useState<number>(9);
  const url = `https://api.github.com/users/${params.user}/repos`;
  const { data, error, loading } = useFetchData<Data[]>(url);

  if (error) navigate("/");

  if (!data || !Array.isArray(data)) {
    return;
  }

  return (
    <StyledSection>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Container>
          {data.slice(0, maxCards).map((repo) => (
            <div key={repo.id} className="card">
              <div className="card-header">
                <h1>{repo.name}</h1>
                <div className="card-buttons">
                  {repo.homepage && (
                    <button
                      onClick={() => window.open(repo.homepage, "_blank")}
                    >
                      <LaunchIcon />
                    </button>
                  )}
                  <button onClick={() => window.open(repo.html_url, "_blank")}>
                    <GitHubIcon />
                  </button>
                </div>
              </div>
              <p>{repo.description}</p>
              <div className="card-footer">
                <span>{repo.language}</span>
                <span>
                  {repo.stargazers_count}
                  <StarIcon style={{ fontSize: "14px" }} />
                </span>
              </div>
            </div>
          ))}
        </Container>
      )}
      {maxCards < data.length ? (
        <button className="card-btn" onClick={() => setMaxCards(maxCards + 3)}>
          See More
        </button>
      ) : (
        <button className="card-btn" onClick={() => setMaxCards(6)}>
          Show Less
        </button>
      )}
    </StyledSection>
  );
};

export default Repositories;