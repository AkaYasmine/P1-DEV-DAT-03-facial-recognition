import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PresencePieChart = () => {
  const data = {
    labels: ['Absences', 'Présences'],
    datasets: [
      {
        label: 'Nombre de Absences ',
        data: [567, 50], // Assure-toi que ces valeurs représentent les présences et absences
        backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Répartition des Absents</h2>
      <Pie data={data} />
    </div>
  );
};

export default PresencePieChart;
