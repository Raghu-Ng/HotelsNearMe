import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/core';

import useStyles from './styles';

export default function Map( { setCoordinates, setBounds, coordinates, places, setChildClicked } ) {

const classes = useStyles();
const isDesktop = useMediaQuery('(min-width:600px)');

// const coordinates = {lat: 11.798849, lng:77.703882 };
 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyC_0pJk1fstlFZX0d7oM7wHzEMHBgPIPdA'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={16}
          margin={[50, 50, 50, 50]}
          // options={''}
          onChange={(e) => { 
             setCoordinates({ lat: e.center.lat, lng: e.center.lng})
             const sw = { lat: e.bounds.sw.lat, lng: e.bounds.sw.lng };
             const ne = { lat: e.bounds.ne.lat, lng: e.bounds.ne.lng };

             setBounds({ sw, ne });
          }}
          onChildClick={(child) => setChildClicked(places[child])}

          >
            {places?.map((place, i)=>(
              <div 
              className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}>
                {
                  !isDesktop?(
                    <LocationOnOutlinedIcon color='primary' fontSize='large'/>):
                    (<Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                        {place.name}
                      </Typography>
                      <img className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://th.bing.com/th/id/OIG.9Tzx.1MuHtOpP5V0BUAL?pid=ImgGn&w=1024&h=1024&rs=1'} alt={place.name} />
                      <div className={classes.ratingContainer}>
                         <Typography variant='subtitle2'>
                           Rating:
                         </Typography>
                         <Typography variant='subtitle2'>
                           {place.rating}
                          </Typography>
                      </div>
                    </Paper>)
                }
              </div>
            ))}
      </GoogleMapReact>
    </div>
  )
}
