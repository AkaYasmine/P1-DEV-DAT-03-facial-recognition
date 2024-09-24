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