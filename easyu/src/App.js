import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import Universities from './pages/Universities';
import Estadisticas from './pages/Estadisticas';
import Tendencias from './pages/Trending';
import Ayudas from './pages/Ayudas';
import Perfil from './pages/Perfil';
import Carreras from './pages/Carreras';
import Carrera from './pages/Carrera';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/Universidades" exact>
          <Universities />
        </Route>
        <Route path="/Estadísticas" exact>
          <Estadisticas />
        </Route>
        <Route path="/Tendencias" exact>
          <Tendencias />
        </Route>
        <Route path="/Ayudas" exact>
          <Ayudas />
        </Route>
        <Route path="/Perfil" exact>
          <Perfil />
        </Route>
        <Route path="/Carreras" exact>
          <Carreras />
        </Route>
        <Route path="/Carrera" exact>
          <Carrera />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
