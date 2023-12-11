import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Projects: React.FC = () => {
  return (
    <Bar
      data={{
        labels: ["A", "B", "C"],
        datasets: [
          {
            label: "Revenue",
            data: [200, 300, 400],
          },
        ],
      }}
    />
  );
};

export default Projects