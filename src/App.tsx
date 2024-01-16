import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const sounds = {
    heater1 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"),
    heater2 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"),
    heater3 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"),
    heater4 : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4.mp3"),
    clap : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
    openHh : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
    kickHat : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"),
    kick : new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"),
    closedHh: new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3")
  }

  const playSound = (key:string) => {
    switch (key) {
      case 'q':
        sounds.heater1.play()
        break;
      default:
        console.log('no sound');
        break;
    }
  }


  return (
    <div className="App">
    < div >
        <button onClick={() => playSound('q')}>Play</button>
      </div >
    </div>
  );
}

export default App;
