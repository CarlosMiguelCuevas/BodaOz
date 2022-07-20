import Countdown from "react-countdown";
import SaveTheDateToon from "../../../Assets/img/SaveTheDate/SaveTheDateToon.jpg";
import "./SaveTheDate.css";

const SaveTheDate = () => {
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
        backgroundSize: "cover",

        backgroundImage: `url(${SaveTheDateToon})`,
        backgroundPositionY: "center",
      }}
    >
      <h2>
        Karen Verdugo & Osvaldo Monzón <br />
        Amarración
      </h2>
      <h1>
        Save the date
        <br />
        <span>18 - Noviembre -2022</span>
      </h1>
    </div>
  );
};

export default SaveTheDate;
