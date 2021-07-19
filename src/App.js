import './index.scss';
import React from 'react';
import DrumMachine from './DrumMachine';
import DrumMachineFCCTestsPass from './DrumMachineFCCTestsPass';

function App() {
  return (
    <div id="app">
     <header id="header">Drum Machine</header>

    <DrumMachine />

    <footer className="footer">
        Coded By <a 
        target="_blank" rel="noreferrer" href="https://github.com/russelltheprogrammer">
        RussellTheProgrammer</a> for FCC curriculum
      </footer>
    </div> 
  );
}

export default App;
