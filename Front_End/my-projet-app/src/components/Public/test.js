const submit = async e => {
    e.preventDefault();
    
    const user = {
      username: username,
      password: password
    };
  
    try {
      // Effectuer la requête POST pour obtenir les tokens
      const { data } = await axios.post(
        'http://localhost:8000/api/token/',
        user,
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      // Stocker les tokens dans localStorage
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
  
      // Ajouter l'en-tête Authorization pour les futures requêtes
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
  
      // Requête pour obtenir les informations de l'utilisateur (is_superuser, is_admin, etc.)
      const userInfo = await axios.get('http://localhost:8000/api/user/', {
        headers: {
          'Authorization': `Bearer ${data.access}`,
          'Content-Type': 'application/json'
        }
      });
  
      const { is_superuser, is_admin } = userInfo.data;
  
       if (is_superuser) {
        window.location.href = '/Gestion';
      } else if (is_admin) {
        window.location.href = '/AdminGestion';
      } else {
        alert('Erreur: Vous n\'êtes ni un super utilisateur ni un administrateur.');
      }
  
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      alert('Connexion échouée, veuillez vérifier vos informations.');
    }
  };












  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  
  const Sidebar = () => {
    const [isSuperUser, setIsSuperUser] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem('access_token');
      if (token) {
        axios.get('http://localhost:8000/api/user/', {
          headers: {
            'Authorization':  `Bearer ${token} `,
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          // Vérifier si l'utilisateur est un super utilisateur
          setIsSuperUser(res.data.is_superuser);
        })
        .catch(err => console.log(err));
      }
    }, []);
  
    return (
      <div className="sidebar">
        <ul>
          {/* Exemple de menu 1 */}
          <li>
            {isSuperUser ? 'Gestion Super Utilisateur' : 'Tableau de Bord'}
          </li>
          
          {/* Exemple de menu 2 */}
          <li>
            {isSuperUser ? 'Gestion des Utilisateurs' : 'Profil Utilisateur'}
          </li>
          
          {/* Exemple de menu 3 */}
          <li>
            {isSuperUser ? 'Paramètres Admin' : 'Paramètres'}
          </li>
  
          {/* Ajoutez d'autres éléments du menu ici */}
        </ul>
      </div>
    );
  }
  
  export default Sidebar;










  // const submit = async e => {
  //   e.preventDefault();
    
  //   const user = {
  //     username: username,
  //     password: password
  //   };
  
  //   try {
  //     // Effectuer la requête POST pour obtenir les tokens
  //     const { data } = await axios.post(
  //       'http://localhost:8000/api/token/',
  //       user,
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );
  
  //     // Stocker les tokens dans localStorage
  //     localStorage.clear();
  //     localStorage.setItem('access_token', data.access);
  //     localStorage.setItem('refresh_token', data.refresh);
  
  //     // Ajouter l'en-tête Authorization pour les futures requêtes
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
  
  //     // Requête pour obtenir les informations de l'utilisateur (is_superuser)
  //     const userInfo = await axios.get('http://localhost:8000/api/user/', {
  //       headers: {
  //         'Authorization': `Bearer ${data.access}`,
  //         'Content-Type': 'application/json'
  //       }
  //     });
  
  //     const { is_superuser } = userInfo.data;
  
  //     // Redirection basée sur le type d'utilisateur
  //     if (is_superuser) {
  //       window.location.href = '/Gestion_employe';
  //     } else {
  //       // Rediriger vers AdminGestion pour un utilisateur non superuser (admin par ex.)
  //       window.location.href = '/Superuser_dashboard';
  //     }
  
  //   } catch (error) {
  //     console.error('Erreur lors de la connexion:', error);
  //     alert('Connexion échouée, veuillez vérifier vos informations.');
  //   }
  // };











  // from rest_framework.decorators import api_view
  // from rest_framework.response import Response
  // from django.contrib.auth.models import User
  // from rest_framework import status
  
  // @api_view(['GET'])
  // def list_users(request):
  //     # Récupérer tous les utilisateurs
  //     users = User.objects.all()
      
  //     # Séparer les super utilisateurs et les utilisateurs normaux
  //     superusers = users.filter(is_superuser=True)
  //     regular_users = users.filter(is_superuser=False)
      
  //     # Structurer les données à renvoyer
  //     data = {
  //         'superusers': [{
  //             'id': user.id,
  //             'username': user.username,
  //             'email': user.email,
  //             'is_superuser': user.is_superuser
  //         } for user in superusers],
          
  //         'regular_users': [{
  //             'id': user.id,
  //             'username': user.username,
  //             'email': user.email,
  //             'is_superuser': user.is_superuser
  //         } for user in regular_users]
  //     }
      
  //     return Response(data, status=status.HTTP_200_OK)





// from django.urls import path
// from .views import list_users

// urlpatterns = [
//     path('users/', list_users, name='list_users'),
// ]



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState({
//     superusers: [],
//     regular_users: []
//   });

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       axios.get('http://localhost:8000/api/users/', {
//         headers: {
//           'Authorization': Bearer ${token},
//           'Content-Type': 'application/json'
//         }
//       })
//       .then(res => {
//         setUsers(res.data);
//       })
//       .catch(err => console.error(err));
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Super Utilisateurs</h2>
//       <ul>
//         {users.superusers.map(user => (
//           <li key={user.id}>{user.username} ({user.email})</li>
//         ))}
//       </ul>

//       <h2>Utilisateurs Normaux</h2>
//       <ul>
//         {users.regular_users.map(user => (
//           <li key={user.id}>{user.username} ({user.email})</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;