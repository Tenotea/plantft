import React from 'react';
import { DNavigation } from './components/app/navigation/Navigation';
import './styles/tailwind.css';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';

function App() {
  return (
    <div className="min-h-screen bg-app-zero-gravity">
      <DNavigation />
    </div>
  );
}

export default App;
