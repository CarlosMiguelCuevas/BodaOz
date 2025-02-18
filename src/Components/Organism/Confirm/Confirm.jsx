import React, { useEffect, useState, useRef } from "react";
import { Bounce } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import bbs from "../../../assets/img/Confirm/bbs.png";
import requestAxios from "../../../util/requestAxios";
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
                <img className="Confirm__img" src={bbs} />
              </b>
            </h1>
          </p>
        </div>
      </Bounce>
    </div>
  );
};

export default WeddingEventsParty;
