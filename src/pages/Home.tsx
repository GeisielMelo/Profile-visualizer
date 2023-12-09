import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const handleSubmit = () => {
    navigate(`/${user}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSubmit();
    }
  };

  return (
    <section>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => handleSubmit()}></button>
    </section>
  );
};

export default Home;
