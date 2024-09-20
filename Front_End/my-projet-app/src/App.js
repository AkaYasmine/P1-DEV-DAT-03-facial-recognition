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
import Interface from './components/Public/Interface';
import PresencePieChart from './components/Public/PresencePieChart';
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
            <Route path ='Login' element={<Login/>}/>
            <Route path ='Register' element={<LogoutPages/>}/>
            <Route path ="/Prise_photo" element={<Prise_photo />}/>
            <Route path ="/Add_employe/" element={<Add_employe />}/>
            <Route path ="/Update_employe/:id" element={<Update_employe />}/>
            <Route path ="/Interface" element={<Interface/>}/>
            <Route path ="/PresencePieChart"element= {<PresencePieChart/>}/>
            <Route path= "/UserChart" element={<UserChart/>}/>

            <Route path = "/Homepage" element={<Homepage/>}/>
            {/* <Route path ='/genere_password' element={<genere_password/>}/> */}
            <Route path ="*" element={<Errors/>}/>
            

          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;