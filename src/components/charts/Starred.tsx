import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Starred: React.FC = () => {
  return (
    <Pie
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

export default Starred