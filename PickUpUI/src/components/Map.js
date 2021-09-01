import React, { useState, useCallback } from "react";
import "./map.css";
import mapStyles from "./mapStyles";

import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
  LoadScript,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "800px",
  // display: "flex",
  float: "right",
};

const defaultCenter = {
  lat: 43.888,
  lng: -79.278,
};

const libraries = ["places"];

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};



function Map(props) {
  function handleOnLoad() {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        const coordinates = {lat: position.coords.latitude, lng: position.coords.longitude}
        props.handleUserPosition(coordinates)
    });
  }
  // const [activeMarker, setActiveMarker] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  
  // const [center, setCenter] = useState(defaultCenter);


  
  const markers = props.restaurants;

  const onSearchBoxLoad = useCallback((ref) => {
    setSearchBox(ref);
  }, []);

  const onPlacesChanged = useCallback(() => {
    const places = searchBox.getPlaces();
    const lat=places[0].geometry.location.lat();
    const lng=places[0].geometry.location.lng()
    props.setCenter({
      lat: lat,
      lng: lng,
    })
    console.log(lat, lng);
  }, [searchBox]);

  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey="AIzaSyBFanEsBx0eYHMrchijJOaxu6pnzcAWA-s"
      libraries={["places"]}
    >
      <GoogleMap
        id="searchbox"
        mapContainerStyle={containerStyle}
        options={options}
        center={props.center}
        zoom={15}
        onClick={() => props.setActiveMarke(null)}
        onLoad={handleOnLoad}
      >
        <StandaloneSearchBox
          onLoad={onSearchBoxLoad}
          onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            placeholder="Customized your placeholder"
            // value="Toronto"
            style={{
              boxSizing: `border-box`,
              border: `1px solid transparent`,
              width: `240px`,
              height: `32px`,
              padding: `0 12px`,
              borderRadius: `3px`,
              boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
              fontSize: `14px`,
              outline: `none`,
              textOverflow: `ellipses`,
              position: "absolute",
              left: "50%",
              marginLeft: "-120px",
            }}
          />
        </StandaloneSearchBox>
        
        {
          /* Child components, such as markers, info windows, etc. */
          <div>
            {markers.map(({ id, name, img, position, address }) => (
              <Marker
                key={id}
                position={position}
                onClick={() => props.handleActiveMarker(id)}
                // onMouseOver={() => props.handleActiveMarker(id)}
                // onMouseOut={() => props.handleActiveMarker(null)}
              >
                {props.activeMarker === id ? (
                  <InfoWindow onCloseClick={() => props.setActiveMarker(null)}>
                    <div className="info-box-wrap">
                      <img src={img} alt="thumbnail" />
                      <div className="info-box-text-wrap">
                        <h6 className="name">{name}</h6>
                        <p className="address">{address}</p>
                      </div>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
          </div>
        }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
