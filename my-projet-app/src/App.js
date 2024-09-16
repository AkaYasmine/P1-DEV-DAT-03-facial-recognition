// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Gestion_employés from './pages/Gestion_employés'
import Pointage_employées from './pages/Pointage_employés';
import Inscription from './pages/Inscription';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Connexion from './components/Public/Connexion';
import Interface from './components/Public/Interface';
import AdmissionsBarChart from './components/Public/AdmissionsBarChart';
import PresencePieChart from './components/Public/PresencePieChart';
import PredictionLineChart from './components/Public/PredictionLineChart';
import UserChart from './components/Public/UserChart';
import  Homepage from './components/Public/Homepage';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path ="/Home" element={<Home/>}/>
            <Route path ="/Gestion_employés" element={<Gestion_employés/>}/>
            <Route path ="/Pointage_employés" element={<Pointage_employées/>}/>
            <Route path ="/Inscription" element={<Inscription/>}/>
            <Route path ="/Connexion" element={<Connexion/>}/>
            <Route path ="/Interface" element={<Interface/>}/>
            <Route path ="/AdmissionsBarChart" element= {<AdmissionsBarChart/>}/>
            <Route path ="/PresencePieChart"element= {<PresencePieChart/>}/>
            <Route path= "/UserChart" element={<UserChart/>}/>
            <Route path= "/PredictionLineChart" element={<PredictionLineChart/>}/>
            <Route path = "/Homepage" element={<Homepage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
