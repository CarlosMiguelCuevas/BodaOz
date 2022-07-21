import Countdown from "react-countdown";
import Ring from "../../../Assets/img/CountDay/Ring.jpg";
import "./CountDay.css";

const CountDay = () => {
  const dateWeeding = new Date(2022, 11, 28);
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
