import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { DNavigation } from './components/app/DNavigation';
import './styles/tailwind.css';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import Home from './components/home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-app-zero-gravity">
        <DNavigation />
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
