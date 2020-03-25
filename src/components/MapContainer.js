import React, { useContext } from 'react';
import GoogleMap from 'google-map-react';
import employeeContext from '../utils/EmployeeContext';
import Marker from './Marker';
import './index.css';

const MapContainer = () => {
    const employees  = useContext(employeeContext);
    //set the min/max range of lat and lon
    const latMin = 25761;
    const latMax = 47608;
    const lngMin = -122335;
    const lngMax = -68972;
    //set default map props
    const defaultProps = {
        center: {
            //Kansas City, MO will be the center of the map
            lat: 39.099,
            lng: -94.578
        },
        zoom: 4
    }

    return (
        <div id="map">
            <GoogleMap
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
              >
                {employees.map((employee, index) => {
                    console.log(`============create a marker for ${employee.firstName}=============`)
                    let lat = (parseFloat(employee.latitude) * 1000).toFixed(3);
                    let lng = (parseFloat(employee.longitude) * 1000).toFixed(3);
                    if (lat < latMax && lat > latMin) {
                        lat = lat / 1000;
                    }
                    else {
                        lat = (Math.floor(Math.random() * (latMax - latMin + 1)) + latMin) / 1000;
                    }
                    if (lng < lngMax && lng > lngMin) {
                        lng = lng / 1000;
                    }
                    else {
                        lng = (Math.floor(Math.random() * (lngMax - lngMin + 1)) + lngMin) / 1000;
                    }
                    console.log(lat, lng)
                    
                    return (
                  
                    <Marker
                        key={index}
                        text={`${employee.firstName} ${employee.lastName}`}
                        lat={lat}
                        lng={lng}
                    />
                    )
                    })}
              </GoogleMap>
        </div>
    )
}

export default MapContainer;