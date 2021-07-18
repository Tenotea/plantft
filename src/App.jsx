import React from 'react';
import { DNavigation } from './components/app/DNavigation';
import './styles/tailwind.css';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import Home from './components/home/Home';

function App() {
  return (
    <div className="min-h-screen bg-app-zero-gravity">
      <DNavigation />
      <Home />
    </div>
  );
}

export default App;
