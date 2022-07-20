import "./App.css";
import { Fade, Zoom } from "react-reveal";
import { Confetti } from "./Components/Atoms";
import SaveTheDate from "./Components/Organism/SaveTheDate/SaveTheDate";
import CountDay from "./Components/Organism/CountDay/CountDay";
import WeddingEventsCurch from "./Components/Organism/WeddingEvents/WeddingEventsCurch";
import WeddingEventsParty from "./Components/Organism/WeddingEvents/WeddingEventsParty";
function App() {
  return (
    <div className="App">
      <Confetti />
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
