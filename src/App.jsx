import React,{useEffect, useState} from "react";
import "./App.css";
import { Fade, Zoom } from "react-reveal";
import { Confetti } from "./Components/Atoms";
import SaveTheDate from "./Components/Organism/SaveTheDate/SaveTheDate";
import CountDay from "./Components/Organism/CountDay/CountDay";
import WeddingEventsCurch from "./Components/Organism/WeddingEvents/WeddingEventsCurch";
import WeddingEventsParty from "./Components/Organism/WeddingEvents/WeddingEventsParty";
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
      <Confetti mobile={mobile}/>
      <Fade>
        <SaveTheDate />
      </Fade>
      <Zoom left>
        <CountDay />
      </Zoom>
      <WeddingEventsCurch />
      <WeddingEventsParty />
    </div>
  );
}

export default App;
