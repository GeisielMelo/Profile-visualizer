import { StyledSection } from "../../styles/StyledCharts";
import Languages from "./Languages";
import Projects from "./Projects";
import Starred from "./Starred";

const Charts = () => {
  return (
    <StyledSection>
      <div className="charts">
        <div className="circular-charts">
          <div>
            <h1>Most Rated Projects</h1>
            <Languages />
          </div>
          <div>
            <h1>Most Used Topic</h1>
            <Starred />
          </div>
        </div>

        <div className="rectangular-charts">
          <div>
            <h1>Star per Project</h1>
            <Projects />
          </div>
        </div>
      </div>
    </StyledSection>
  );
};

export default Charts;
