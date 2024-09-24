// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Gestion_employés from './pages/Gestion_employés'
import Pointage_employées from './pages/Pointage_employés';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Errors from './_utils.js/Errors';
import  Login  from './components/Public/Login';
import LogoutPages from './pages/LogoutPages';
import Prise_photo from './pages/Prise_photo';
import Add_employe from './pages/Add_employe';
import Update_employe from './pages/Update_employe';
import Superuser_dashboard from './pages/Superuser_dashboard';

// import genere_password from './pages/genere_password';
import Interface from './pages/Interface';
import AdmissionsBarChart from './components/Public/AdmissionsBarChart';
import PresencePieChart from './components/Public/PresencePieChart';
import PredictionLineChart from './components/Public/PredictionLineChart';
import UserChart from './components/Public/UserChart';
import Homepage from './components/Public/Homepage';
 
import RoutesPriveAdmin from './components/Public/RoutesPriveAdmin';

 
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path ="/Home" element={<Home/>}/>
            <Route path ="/Gestion_employés" element={<proteger_route><Gestion_employés/></proteger_route>}/>
            <Route path ="/Pointage_employés" element={<Pointage_employées/>}/>
            <Route path ='/Login' element={<Login/>}/>
            <Route path ='Register' element={<LogoutPages/>}/>
            <Route path ="/Prise_photo" element={<Prise_photo />}/>
            <Route path ="/Add_employe/" element={<Add_employe />}/>
            <Route path ="/Update_employe/:id" element={<Update_employe />}/>
            {/* <Route path ='/genere_password' element={<genere_password/>}/> */}
            <Route path ="/Interface" element={<Interface/>}/>
            <Route path ="/AdmissionsBarChart" element= {<AdmissionsBarChart/>}/>
            <Route path ="/PresencePieChart"element= {<PresencePieChart/>}/>
            <Route path= "/UserChart" element={<UserChart/>}/>
            <Route path= "/PredictionLineChart" element={<PredictionLineChart/>}/>
            <Route path = "/Homepage" element={<Homepage/>}/>
            <Route path = "/Superuser_dashboard" element={<Superuser_dashboard/>}/>
 
            <Route path ="*" element={<Errors/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;