import React,{useEffect, useState} from "react";
import "./App.css";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Confetti } from "./Components/Atoms";
import SaveTheDate from "./Components/Organism/SaveTheDate/SaveTheDate";
import CountDay from "./Components/Organism/CountDay/CountDay";
import WeddingEventsCurch from "./Components/Organism/WeddingEvents/WeddingEventsCurch";
import WeddingEventsParty from "./Components/Organism/WeddingEvents/WeddingEventsParty";
import Confirm from "./Components/Organism/Confirm/Confirm";
import song from "./assets/songs/GangnamStyle.mp3";
function App() {
  const [mobile, setMobile] = useState(window.innerWidth<=768);
    const handleWindowResize = () => {
      setMobile(window.innerWidth<=769);
    }
    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
          window.removeEventListener('resize', handleWindowResize);
      }
  }, []);

  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    const audioElement = document.getElementById('background-audio');
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="App">
      {/* <Confetti mobile={mobile}/> */}
      <div className="audio-container">
        <audio id="background-audio" autoPlay loop>
          <source src={song} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <button className="audio-toggle-button" onClick={toggleAudio}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      <Fade>
        <SaveTheDate mobile={mobile} />
      </Fade>
      <Zoom left>
        <CountDay />
      </Zoom>
      <Slide left>
        <div className="WeedingEvents__container">
          <h1 className="WeddingEventGeneralTitle">Evento ♥</h1>
        </div>
      </Slide>
      <WeddingEventsParty />
      <Confirm />
    </div>
  );
}

export default App;
