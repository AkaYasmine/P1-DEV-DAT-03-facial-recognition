// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Gestion_employés from './pages/Gestion_employés'
import Pointage_employées from './pages/Pointage_employés';
import Inscription from './pages/Inscription';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Errors from './_utils.js/Errors';
import Connexion from './components/Public/Connexion';
import Interface from './components/Public/Interface';

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
            <Route path ="/Connexion" element={<Connexion/>}/>
            <Route path ="/Interface" element={<Interface/>}/>

            {/* S'exécute lorsqu'une route n'est trouvée*/}
            <Route path ="*" element={<Errors/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
