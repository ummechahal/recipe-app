import React from 'react';
import Home from './pages/home/Home';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className="app">
        <div>
          <Home />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
