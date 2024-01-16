import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [soundPlayed, setSoundPlayed] = useState('')


  const buttons = [{
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"),
      button : 'Q',
      description : 'heater-1',
      label: 'Heater 1'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"),
      button : 'W',
      description : 'heater-2',
      label: 'Heater 2'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"),
      button : 'E',
      description : 'heater-3',
      label: 'Heater 3'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"),
      button : 'A',
      description : 'heater-4',
      label: 'Heater 4'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"),
      button : 'S',
      description : 'clap',
      label: 'Clap'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"),
      button : 'D',
      description : 'open-hh',
      label: 'Open HH'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"),
      button : 'Z',
      description : 'kick-n-hat',
      label: "Kick n' Hat"
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"),
      button : 'X',
      description : 'kick',
      label: 'Kick'
    },
    {
      sound : new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"),
      button : 'C',
      description : 'closed-hh',
      label : 'Closed HH'
    }   
  ];


  return (
    <div  id="drum-machine"  className="App">
    < div>
        {buttons.map((button, index) => (
          <button className="drum-pad" id={button.description} key={index} onClick={() => { 
            button.sound.play();
            setSoundPlayed(button.label)
          }}
           >{button.button}</button>
        ))}
        
      </div >
      <div id="display">{soundPlayed}</div>
    </div>
  );
}

export default App;
