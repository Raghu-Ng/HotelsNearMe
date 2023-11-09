import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons';
// import Rating from '@mui/material/Rating';

import useStyles from './styles';


export default function PlaceDetails({place}) {

  const classes= useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
          style= {{height:200}}
          image={place.photo ? place.photo.images.large.url : 'https://th.bing.com/th/id/OIG.9Tzx.1MuHtOpP5V0BUAL?pid=ImgGn&w=1024&h=1024&rs=1'}
          title={place.name} 
      />
       <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          {/* <Rating name="read-only" value={Number(place.rating)} readOnly /> */}
          <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
        </Box>
        </CardContent>
    </Card>
  )
}
