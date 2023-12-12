import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

type LanguagesData = {
  data: string[];
};

type ChartData = {
  language: string;
  uses: number;
}

const Languages: React.FC<LanguagesData> = ({ data }) => {
  const chartData:ChartData[] = []
  const filteredData: string[] = [...new Set(data)];

  filteredData.forEach(item => {
    chartData.push({
      language: item,
      uses: data.reduce((acc, language) => (language === item ? acc + 1 : acc), 0),
    })
  }); 

  return (
    <Doughnut
      data={{
        labels: chartData.map((data) => data.language ),
        datasets: [
          {
            label: " Uses",
            data: chartData.map((data) => data.uses),
          },
        ],
      }}
    />
  );
};

export default Languages;
