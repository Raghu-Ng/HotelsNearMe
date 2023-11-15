import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'; 

import usestyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function List({places, childClicked, isLoading}) {

  const classes = usestyles();
  const [type, setType] = useState("resturants");
  const [rating, setRating] = useState('');

  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
  
    setElRefs(refs);
  }, [places, elRefs]);
  

  // const places = [
  //   {name:'Thanduri Chai'},
  //   {name:'Coffe Cafe'},
  //   {name:'ragi Nadu'}
              // ];

  return (

    // Type input
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants aroud you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=> setType(e.target.value)}>
          <MenuItem value= "resturants" >Resturants</MenuItem>
          <MenuItem value= "hotels" >Hotels</MenuItem>
          <MenuItem value= "attractions" >Attractions</MenuItem>
        </Select>
      </FormControl>

    {/*  Rating input */}
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
          <MenuItem value= {0} >All</MenuItem>
          <MenuItem value= {3} >Above 3 Star</MenuItem>
          <MenuItem value= {4} >Above 4 star</MenuItem>
        </Select>
      </FormControl>


      {/* the hotel cards */}

      {/* <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i)=> {
          <Grid item key={i} xs={12} >
              <PlaceDetails place={place}/>
          </Grid>
        })}
      </Grid> */}

      <Grid container spacing={3} className={classes.list}>
  {places?.map((place,i) => (
    <Grid item key={i} xs={12}>
<PlaceDetails place={place} selected={Number(childClicked) === i} refProp={elRefs[i]} key={i} />


    </Grid>
  ))}
</Grid>
</>
      )}

    </div>
  )
}
