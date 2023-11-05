import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/core';

import useStyles from './styles';

export default function Map( { setCoordinates, setBounds, coordinates} ) {

const classes = useStyles();
const isMobile = useMediaQuery('(min-width:600px)');

// const coordinates = {lat: 12.798849, lng:77.703882 };
 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyC_0pJk1fstlFZX0d7oM7wHzEMHBgPIPdA'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          // options={''}
          onChange={(e) => {
            console.log(e); 
             setCoordinates({ lat: e.center.lat, lng: e.center.lng})
          }}
          // onChildClick={''}
          >
      </GoogleMapReact>
    </div>
  )
}
