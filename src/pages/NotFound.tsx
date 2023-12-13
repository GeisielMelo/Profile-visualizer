import { useNavigate } from "react-router-dom";
import { StyledSection } from "../styles/StyledNotFound";
import Footer from "../components/footer/Footer";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledSection>
        <div>
          <img src="/github.svg" alt="GitHub Logo" />
          <h1>Ops!</h1>
          <p>
            This page doesn't exist,{" "}
            <span className="span-hover" onClick={() => navigate("/")}>
              back to home
            </span>
            .
          </p>
        </div>
      </StyledSection>
      <Footer />
    </>
  );
};

export default NotFound;
