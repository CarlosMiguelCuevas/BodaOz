/* global google */
import React, { Component } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import InfoWindowEx from "./InfoWindowEx";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props.place_,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    showDetails = place => {
        console.log(place);
    };

    render() {
        return (
            <div className="map-container" onClick={()=>window.open(this.props.url)}>
                <Map
                    google={this.props.google}
                    className={"map"}
                    zoom={16}
                    initialCenter={this.props.center}
                >
                    {this.props.places.map((place, i) => {
                        return (
                            <Marker
                                onClick={this.onMarkerClick}
                                key={place.id}
                                place_={place}
                                position={{ lat: place.lat, lng: place.lng }}
                            />
                        );
                    })}
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                            <h3>{this.state.selectedPlace.name}</h3>
                            <button
                                type="button"
                                onClick={this.showDetails.bind(this, this.state.selectedPlace)}
                            >
                                Show details
                            </button>
                        </div>
                    </InfoWindowEx>
                </Map>
            </div>
        );
    }
}

// export default GoogleApiWrapper({
//     apiKey: "AIzaSyDagzrcyHNLIx_-6txnv36-93IfFhM33lw"
// })(MapContainer);