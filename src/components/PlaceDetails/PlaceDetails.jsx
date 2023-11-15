import React, { useEffect } from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';


import useStyles from './styles';


export default function PlaceDetails({place, selected, refProp}) {

  const classes= useStyles();
  
  useEffect(() => {
    if (selected && refProp) {
      refProp.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selected, refProp]);
  
  // console.log(place);
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
        {/* <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box> */}
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography> 
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <p>Phone</p>{place.phone}
           </Typography>
        )}
              <div className={classes.ratingContainer}>
           <Typography variant='subtitle2' color="textSecondary">
             Rating:
           </Typography>
           <Typography variant='subtitle2' color="textSecondary">
             {place.rating}
            </Typography>
              </div>
        <CardActions>
          <Button size="small" color='primary' onClick={()=> window.open(place.web_url, '_blank')}>More Details</Button>
          <Button size="small" color='primary' onClick={()=> window.open(place.website, '_blank')}>Website</Button>
        </CardActions>
        </CardContent>
    </Card>
  )
}
