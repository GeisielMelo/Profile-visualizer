import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

type TopicsData = {
  data: string[];
};

type ChartData = {
  topic: string;
  uses: number;
};

const Topics: React.FC<TopicsData> = ({ data }) => {
  const chartData: ChartData[] = [];
  const filteredData: string[] = [...new Set(data)];

  filteredData.forEach((item) => {
    chartData.push({
      topic: item,
      uses: data.reduce((acc, language) => (language === item ? acc + 1 : acc), 0),
    });
  });

  return (
    <Bar
      data={{
        labels: chartData.map((data) => data.topic),
        datasets: [
          {
            label: " Uses",
            data: chartData.map((data) => data.uses),
          },
        ],
      }}
      options={{
        scales: {
          x: {
            display: false,
          },
        },
      }}
    />
  );
};

export default Topics;
