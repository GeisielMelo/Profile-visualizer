import { useNavigate } from "react-router-dom";
import { StyledFooter } from "../../styles/StyledFooter";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledFooter>
      <span onClick={() => navigate("/")}>Home</span>

      <a href="https://github.com/GeisielMelo/" target="_blank">
        © {new Date().getFullYear()} Geisiel Melo.
      </a>

      <span onClick={() => navigate("/403")}>Rate Limit</span>
    </StyledFooter>
  );
};

export default Footer;
