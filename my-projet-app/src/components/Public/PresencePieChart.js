// src/components/PresencePieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PresencePieChart = () => {
  const data = {
    labels: ['Présences', 'Absences'],
    datasets: [
      {
        label: 'Répartition des présences',
        data: [567, 50],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PresencePieChart;
