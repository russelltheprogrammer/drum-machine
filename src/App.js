import './index.scss';
import React from 'react';
import Controller from './Controller';

function App() {
  return (
    <div id="app">
     <header id="header">Drum Machine</header>

    <Controller />

    <footer className="footer">
        Coded By <a 
        target="_blank" rel="noreferrer" href="https://github.com/russelltheprogrammer">
        RussellTheProgrammer</a> for FCC curriculum
      </footer>
    </div> 
  );
}

export default App;
