import Countdown from "react-countdown";
import SaveTheDateCover from "../../../../public/welcome_image.jpg";
import "./SaveTheDate.css";

const SaveTheDate = ({mobile}) => {
  const dateWeeding = new Date(2022, 11, 28);
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    return (
      <span>
        Dias:{days} Horas:{hours} Minutos:{minutes} Segundos{seconds}
      </span>
    );
  };
  return (
    <div
      className="SaveTheDate__container"
      style={{
        backgroundImage: `url(${SaveTheDateCover})`,
      }}
    >
      <h2>
        Cristina Coronado <br /> & Carlos Cuevas 
      </h2>
      <h1>
        Save the date
        <br />
        <span>26 - Abril -2025</span>
      </h1>
    </div>
  );
};

export default SaveTheDate;
