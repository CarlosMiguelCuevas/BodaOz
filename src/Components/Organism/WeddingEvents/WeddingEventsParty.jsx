import React, { useEffect, useState, useRef } from "react";
import { Slide } from "react-awesome-reveal";
// import Map from "../../Atoms/Map/Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SalonFoto1 from "../../../Assets/img/WeddingEvent/Party/salon_eventos_1.jpg";
import SalonFoto2 from "../../../Assets/img/WeddingEvent/Party/salon_eventos_2.jpg";
import SalonFoto3 from "../../../Assets/img/WeddingEvent/Party/salon_eventos_3.jpg";
import GrupoPlatino1 from "../../../Assets/img/WeddingEvent/Party/GrupoPlatino1.jpg";
import "./WeddingEventsParty.css";

const WeddingEventsParty = () => {
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
    <div className="WeedingEventsChurchP__container">
      <Slide left>
        <div className="WeedingEvents__container">
          <div className="WeedingEventsChurch__container">
            <p>
              <h1>
                <b>
                  Lugar:
                  <br />{" "}
                </b>
                La Marquesa Jardin
              </h1>
              <h1>
                <b>Hora:</b>
                <br />
                6:00pm
              </h1>
            </p>
            <img src={SalonFoto1} />
            <img src={SalonFoto2} />
            <img src={SalonFoto3} />
          </div>
        </div>
      </Slide>
      {/* <Slide right>
        <div className="WeedingEventsChurch__Mapcontainer">
          <p>
            <h1>
              <b>Ubicación:</b>
            </h1>
          </p>
          <Map
            places={data}
            center={{ lat: 29.0149963, lng: -110.9730557 }}
            url={
              "https://www.google.com/maps/place/Jard%C3%ADn+del+Lago/@29.0140924,-110.9683613,15z/data=!4m5!3m4!1s0x0:0xa640c7c70797a00f!8m2!3d29.0140924!4d-110.9683613"
            }
          />
        </div>
      </Slide> */}
      <Slide bottom>
        <div className="WeedingEventsGroup__container">
          <div className="WeedingEventsChurch__container">
            <p>
              <h1>
                <b>
                  Música:
                  <br />
                </b>
                Grupo Platino
              </h1>
              <h2>
                <FontAwesomeIcon
                  icon={faFacebook}
                  onClick={() =>
                    window.open("https://www.facebook.com/grupomusicalplatino/")
                  }
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  onClick={() =>
                    window.open("https://www.instagram.com/grupoplatinohmo/")
                  }
                />
              </h2>
            </p>
            <img src={GrupoPlatino1} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default WeddingEventsParty;
