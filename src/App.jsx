import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import { DNavigation } from './components/app/DNavigation';
import './styles/tailwind.css';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import Home from './components/home/Home';
import Auth from './components/auth/Auth';


function App() {
  const routeLocation = useLocation()
  return (
    <div className="min-h-screen bg-app-zero-gravity">
      { !routeLocation.pathname.includes('auth') && <DNavigation /> }
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
