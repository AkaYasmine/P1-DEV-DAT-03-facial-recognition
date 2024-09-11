// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Gestion_employés from './pages/Gestion_employés'
import Pointage_employées from './pages/Pointage_employés';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Errors from './_utils.js/Errors';
import Login from './pages/Auth.js/Login';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path ="/Home" element={<Home/>}/>
            <Route path ="/Gestion_employés" element={<Gestion_employés/>}/>
            <Route path ="/Pointage_employés" element={<Pointage_employées/>}/>
            <Route path ="/Login" element={<Login/>}/>
           
            


            <Route path ="*" element={<Errors/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
