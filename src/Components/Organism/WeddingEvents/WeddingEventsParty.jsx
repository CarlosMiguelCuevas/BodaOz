import React, { useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SalonFoto1 from "../../../Assets/img/WeddingEvent/Party/salon_eventos_1.jpg";
import SalonFoto2 from "../../../Assets/img/WeddingEvent/Party/salon_eventos_2.jpg";
import SalonFoto3 from "../../../Assets/img/WeddingEvent/Party/salon_eventos_3.jpg";
import GrupoPlatino1 from "../../../Assets/img/WeddingEvent/Party/GrupoPlatino1.jpg";
import "./WeddingEventsParty.css";

const Map = ({ center, zoom }) => {
  const mapRef = useRef();

  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center,
        zoom,
      });

      new window.google.maps.Marker({
        position: center,
        map,
      });
    };

    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDagzrcyHNLIx_-6txnv36-93IfFhM33lw`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    }
  }, [center, zoom]);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

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
      <Slide right>
        <div className="WeedingEventsChurch__Mapcontainer">
          <h1>
            <b>Ubicación:</b>
          </h1>
          <Map center={{ lat: 29.0149963, lng: -110.9730557 }} zoom={15} />
        </div>
      </Slide>
      <Slide bottom>
        <div className="WeedingEventsGroup__container">
          <div className="WeedingEventsChurch__container">
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
            <img src={GrupoPlatino1} />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default WeddingEventsParty;