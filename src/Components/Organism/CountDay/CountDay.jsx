import Countdown from "react-countdown";
import Ring from "../../../Assets/img/CountDay/Ring2.jpg";
import "./CountDay.css";

const CountDay = () => {
  const dateWeeding = new Date(2025, 4, 26);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <span>
        {days} Dias {hours} Horas {minutes} Minutos {seconds}
      </span>
    );
  };
  return (
    <div
      className="CountDay__container"
      style={{
        backgroundImage: `url(${Ring})`,
        backgroundPosition: 'bottom', // Adjust this value to move the background image
        // backgroundSize: 'cover', // Ensure the image covers the container
      }}
    >
      <div className="CountDay__Countercontainer">
        <h1>
          <Countdown date={dateWeeding} renderer={renderer} />
        </h1>
      </div>
    </div>
  );
};

export default CountDay;
