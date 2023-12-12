import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

type StarredObject = {
  name: string;
  stars: number;
};

type ProjectsData = {
  data: StarredObject[];
};

const Starred: React.FC<ProjectsData> = ({ data }) => {
  return (
    <Pie
      data={{
        labels: data.map((item) => item.name),
        datasets: [
          {
            label: " Stars",
            data: data.map((item) => item.stars),
          },
        ],
      }}
    />
  );
};

export default Starred;
