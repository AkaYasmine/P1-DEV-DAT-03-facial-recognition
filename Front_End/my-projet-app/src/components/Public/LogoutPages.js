import  { useNavigate } from 'react-router-dom'

export const Logout = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {
       localStorage.removeItem('access_token');
       localStorage.removeItem('refresh_token');
       navigate('/HomePages');   
    };
 
};

export default Logout;