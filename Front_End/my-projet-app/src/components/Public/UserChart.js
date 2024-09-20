// src/components/UserChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserChart = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      axios.get('http://127.0.0.1:8000/api/tasks/', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(res => {
        const nbr = res.data.length; // Récupérer la longueur des données
        setTotalUsers(nbr); // Mettre à jour l'état avec le nombre d'utilisateurs
        console.log(nbr); // Afficher la longueur
      })
      .catch(err => console.log(err));
    } else {
      console.log("Pas de token d'accès dans le localStorage");
    }
  }, []);

  const data = {
    labels: ['Total Utilisateurs'],
    datasets: [
      {
        label: 'Nombre d\'utilisateurs',
        data: [totalUsers], // Utiliser le total d'utilisateurs récupéré
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total d\'Utilisateurs',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default UserChart;