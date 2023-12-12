import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledSection } from '../styles/StyledHome'

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
    <StyledSection>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => handleSubmit()}></button>
    </StyledSection>
  );
};

export default Home;
