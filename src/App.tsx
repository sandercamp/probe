import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureOfTheDay from './pages/PictureOfTheDay';

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <PictureOfTheDay />
    </div>
  );
}

export default App;
