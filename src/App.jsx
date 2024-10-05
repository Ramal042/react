import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Live from './components/Live';
import './index.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />,
      <Header />
      <Live />
      
    </div>
  );
};

export default App;
