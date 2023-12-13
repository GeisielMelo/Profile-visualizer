import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSection } from "../styles/StyledHome";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../components/footer/Footer";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>("");

  const handleSubmit = () => {
    navigate(`/${user}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <StyledSection>
        <div className="search">
          <img src="/github.svg" alt="GitHub Logo" />
          <h1>Find Your Profile</h1>
          <div>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => handleSubmit()}>
              <SearchIcon />
            </button>
          </div>
        </div>
      </StyledSection>
      <Footer />
    </>
  );
};

export default Home;
