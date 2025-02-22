import React, { Component, useRef } from "react";
import { Wrapper, Status, Map, Marker, InfoWindow } from "@googlemaps/react-wrapper";

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        };
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        const map = this.mapRef.current;
        if (map) {
            this.props.places.forEach(place => {
                new google.maps.Marker({
                    position: { lat: place.lat, lng: place.lng },
                    map: map,
                    title: place.name
                });
            });
        }
    }

    onMarkerClick = (place, marker, e) => {
        this.setState({
            selectedPlace: place,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onClose = () => {
        this.setState({
            showingInfoWindow: false
        });
    };

    render() {
        const render = (status) => {
            if (status === Status.LOADING) return <div>Loading...</div>;
            if (status === Status.FAILURE) return <div>Error loading map</div>;
            return null;
        };

        return (
            <Wrapper apiKey={"AIzaSyBZnJHU4oypaFZQX50h9iRFlC0ENcB-sfU"} render={render}>
                <Map
                    ref={this.mapRef}
                    center={this.props.center}
                    zoom={14}
                    onClick={() => window.open(this.props.url)}
                    onLoad={(map) => {
                        this.props.places.forEach(place => {
                            new google.maps.Marker({
                                position: { lat: place.lat, lng: place.lng },
                                map: map,
                                title: place.name
                            });
                        });
                    }}
                >
                    {this.props.places.map((place, i) => (
                        <Marker
                            key={i}
                            position={{ lat: place.lat, lng: place.lng }}
                            onClick={(e) => this.onMarkerClick(place, e)}
                        />
                    ))}

                    {this.state.showingInfoWindow && (
                        <InfoWindow
                            position={this.state.activeMarker.position}
                            onClose={this.onClose}
                        >
                            <div>
                                <h3>{this.state.selectedPlace.name}</h3>
                                {/* Aquí puedes agregar más información del lugar */}
                            </div>
                        </InfoWindow>
                    )}
                </Map>
            </Wrapper>
        );
    }
}

export default MapContainer;