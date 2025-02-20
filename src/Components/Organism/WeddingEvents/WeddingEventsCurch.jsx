import React, { useEffect, useState, useRef } from "react";
import { Flip, Slide } from "react-awesome-reveal";
import Fatima1 from "../../../Assets/img/WeddingEvent/Church/Fatima1.jpg";
// import Map from "../../Atoms/Map/Map";
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
     
      {/* <Slide right>
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
      </Slide> */}
    </div>
  );
};

export default WeddingEvents;
