import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Languages: React.FC = () => {
  return (
    <Doughnut
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

export default Languages