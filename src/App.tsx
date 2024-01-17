import React, { useEffect, useState } from 'react';
import './App.css';

function App() {


  const [soundPlayed, setSoundPlayed] = useState('')


  const buttons = [{
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      button : 'Q',
      description : 'heater-1',
      label: 'Heater 1'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      button : 'W',
      description : 'heater-2',
      label: 'Heater 2'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      button : 'E',
      description : 'heater-3',
      label: 'Heater 3'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      button : 'A',
      description : 'heater-4',
      label: 'Heater 4'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      button : 'S',
      description : 'clap',
      label: 'Clap'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      button : 'D',
      description : 'open-hh',
      label: 'Open HH'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      button : 'Z',
      description : 'kick-n-hat',
      label: "Kick n' Hat"
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      button : 'X',
      description : 'kick',
      label: 'Kick'
    },
    {
      sound : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      button : 'C',
      description : 'closed-hh',
      label : 'Closed HH'
    }   
  ];

  interface button {
    sound: string,
    button: string,
    description: string,
    label: string 
  }

  const playSound = (button: button) => {
    const audioElement = document.getElementById(button.button) as HTMLAudioElement | null;
    
    if (audioElement) {
      audioElement.currentTime = 0; // Reset playback position to the beginning
      audioElement.play().catch((error) => console.error('Error playing audio:', error));
      setSoundPlayed(button.label);
    } else {
      console.error(`Audio element not found for button: ${button.button}`);
    }
  };

  const getButtonData = (key: string) => {
    return buttons.filter((button) => button.button === key)[0];
  }

  const handleKeyDown = (event : any) => {
    // Your logic for handling the keydown event for the whole document goes here
    const button = getButtonData(event.key.toUpperCase());
    if (button) {
      playSound(button)
    } else {
      console.log('no associated sound to play');
    }; 
  };

  const handleButtonClick = (buttonKey: string) => {
    playSound(getButtonData(buttonKey));
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  return (
    <div  id="drum-machine"  className="inner-container">
    < div className="pad-bank">
        {buttons.map((button, index) => (
          <div className="drum-pad" id={button.description} key={index} onClick={() => { 
            handleButtonClick(button.button)
            
          }}>
            <audio className="clip" id={button.button} src={button.sound}></audio>
            {button.button}
          </div>
        ))}
        
      </div >
      <div id="display" className="display">{soundPlayed}</div>
    </div>
  );
}

export default App;
