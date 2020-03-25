import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import employeeContext from '../utils/EmployeeContext'
import './index.css';

const MapContainer = () => {
    const { allemployees } = useContext(employeeContext);
    console.log("all employees")
    console.log(allemployees);
    const defaultProps = {
        center: {
            //Kansas City, MO will be the center of the map
            lat: 39.099,
            lng: -94.578
        },
        zoom: 4
    }

    function renderMarkers(map, maps) {
        //set the min/max range of lat and lon
        const latMin = 25761;
        const latMax = 47608;
        const lngMin = -122335;
        const lngMax = -68972;
        
        console.log("====time to render markers=====");
        console.log(allemployees);
        
        allemployees.map((employee, index) => {
            console.log(`============create a marker for ${employee.firstName}=============`)
            let lat = (parseFloat(employee.latitude) * 1000).toFixed(3);
            let lng = (parseFloat(employee.longitude) * 1000).toFixed(3);
            if (lat < latMax && lat > latMin){
                lat = lat/1000;
            }
            else {
                lat = (Math.floor(Math.random() * (latMax - latMin + 1)) + latMin)/1000;
            }
            if (lng < lngMax && lng > lngMin){
                lng = lng/1000;
            }
            else {
                lng = (Math.floor(Math.random() * (lngMax - lngMin + 1)) + lngMin)/1000; 
            }
            console.log(lat, lng)
            let marker = new maps.Marker({
                position: {
                    lat: lat,
                    lng: lng
                },
                map,
                title: `${employee.firstName} ${employee.lastName}`
            })
            return marker;
        })
    }

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}>
                </GoogleMapReact>
        </div>
    )
}

export default MapContainer;