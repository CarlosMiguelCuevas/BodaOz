import React, { useEffect, useState, useRef } from "react";
import { Flip, Slide } from "react-reveal";
import Fatima1 from "../../../Assets/img/WeddingEvent/Church/Fatima1.jpg";
import Map from "../../Atoms/Map/Map";
import "./WeddingEventsCurch.css";

const WeddingEvents = () => {
  const data = [
    {
      name: "Sydney",
      title: "Sydney",
      lat: 29.0913317,
      lng: -110.9657031,
      id: 1,
    },
  ];
  return (
    <div className="WeedingEventsChurchP__container">
      <Slide left>
        <div className="WeedingEvents__container">
          <h1 className="WeddingEventGeneralTitle">Eventos ♥</h1>
          <div className="WeedingEventsChurch__container">
            <p>
              <h1>
                <b>Misa:</b>
                <br />
                Parroquia Nuestra Señora del Rosario de Fátima
              </h1>
              <h1>
                <b>Hora:</b>
                <br />
                4:30pm
              </h1>
            </p>

            <img src={Fatima1} />
          </div>
        </div>
      </Slide>
      <Slide right>
        <div className="WeedingEventsChurch__Mapcontainer">
          <p>
            <h1>
              <b>Ubicación:</b>
            </h1>
          </p>
          <Map
            places={data}
            center={{ lat: 29.0907801, lng: -110.965409 }}
            url={
              "https://www.google.com/maps/place/Parroquia+Nuestra+Se%C3%B1ora+del+Rosario+de+F%C3%A1tima/@29.0907516,-110.9676504,17z/data=!3m1!4b1!4m5!3m4!1s0x86ce843a330ee06d:0x864a86481ac28bbb!8m2!3d29.0907516!4d-110.9654617"
            }
          />
        </div>
      </Slide>
    </div>
  );
};

export default WeddingEvents;
