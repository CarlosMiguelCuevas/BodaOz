import React,{useEffect, useState} from "react";
import "./App.css";
import { Fade, Zoom, Slide } from "react-awesome-reveal";
import { Confetti } from "./Components/Atoms";
import SaveTheDate from "./Components/Organism/SaveTheDate/SaveTheDate";
import CountDay from "./Components/Organism/CountDay/CountDay";
import WeddingEventsCurch from "./Components/Organism/WeddingEvents/WeddingEventsCurch";
import WeddingEventsParty from "./Components/Organism/WeddingEvents/WeddingEventsParty";
import Confirm from "./Components/Organism/Confirm/Confirm";
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

  return (
    <div className="App">
      {/* <Confetti mobile={mobile}/> */}
      <Fade>
        <SaveTheDate  mobile={mobile}/>
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
