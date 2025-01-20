import React from 'react';
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <div className="h-full w-full bg-white">
      {/* Background */}
      <div className="absolute h-full bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-white to-slate-700 overflow-auto"></div>

      {/* Main App Content */}
      <Router>
        <Header />
        <div className="mt-0 pt-2">
        <AnimRoutes />
        </div>
      </Router>
    </div>
  );
};

export default App;
