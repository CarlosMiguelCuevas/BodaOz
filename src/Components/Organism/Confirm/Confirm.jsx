import React, { useEffect, useState, useRef } from "react";
import { Bounce } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import requestAxios from "../../../util/requestAxios";
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import SalonFoto1 from "../../../Assets/img/confirm/_DSC0057.jpg";
import SalonFoto2 from "../../../Assets/img/confirm/_DSC0134.jpg";
import SalonFoto3 from "../../../Assets/img/confirm/_DSC0238.jpg";
import SalonFoto4 from "../../../Assets/img/confirm/_DSC1929.jpg";
import SalonFoto5 from "../../../Assets/img/confirm/_DSC2048.jpg";
import SalonFoto6 from "../../../Assets/img/confirm/_DSC9193.jpg";
import SalonFoto7 from "../../../Assets/img/confirm/_DSC9253.jpg";
import SalonFoto8 from "../../../Assets/img/confirm/_DSC9289.jpg";
import SalonFoto9 from "../../../Assets/img/confirm/_DSC9854.jpg";
import SalonFoto10 from "../../../Assets/img/confirm/_DSC9866.jpg";

import "./Confirm.css";

const WeddingEventsParty = () => {
  const [invitados, setInvitados] = useState([]);
  useEffect(() => {
    getInfo();
  }, []);
  const getInfo = async () => {
    debugger;
    const { error, data } = await requestAxios({
      url: `wedding/GetInvitados`,
      method: "get",
      data: {},
    });
    if (error == "") setInvitados(data);
  };
  const data = [
    {
      name: "Santa Clara",
      title: "Santa Clara",
      lat: 29.0141289,
      lng: -110.9690557,
      id: 1,
    },
  ];
  return (
    <div className="Confirm__container">
      <Bounce cascade>
        <div className="ConfirmTitle__container">
          <p>
            <h1>
              <b>
                Confirmación de Asistencia:
                <br />
              </b>
            </h1>
            <h2>
              Favor de Confirmar la asistencia para ayudarnos a tener el evento
              que deseamos ♥<br />
              <br />
              <span
                className="btnConfirm"
                onClick={() =>
                  window.open(
                    "https://wa.me/526622446118?text=Quiero confirmar mi asistencia"
                  )
                }
              >
                Click aqui{" "}
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ cursor: "pointer" }}
                />
              </span>
              <br />
            </h2>
          </p>
          {invitados.map((invitado,i) => (
                  <div key={`invitado${i}`}>{invitado.nombre}</div>
                ))}
          <p>
            <h1>
              <b>
                Los esperamos!
                
                <br />
                <Carousel>
                <div>
                    <img src={SalonFoto1} />
                </div>
            
                <div>
                    <img src={SalonFoto4} />
                </div>
                <div>
                    <img src={SalonFoto5} />
                </div>
          
                <div>
                    <img src={SalonFoto7} />
                </div>
            
                <div>
                    <img src={SalonFoto9} />
                </div>
             
            </Carousel>
              </b>
            </h1>
          </p>
        </div>
      </Bounce>
    </div>
  );
};

export default WeddingEventsParty;
