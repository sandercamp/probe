import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import PictureOfTheDay from './components/pages/PictureOfTheDay';
import SolarSystem from './components/pages/SolarSystem';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={ '/' } element={ <PictureOfTheDay />  } />
                <Route path={ '/solar-system' } element={ <SolarSystem/> } />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
