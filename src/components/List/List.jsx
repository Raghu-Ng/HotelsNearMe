import React, { useState, useEffect, createRef, useCallback } from 'react';
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';
import usestyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function List({ places, childClicked, isLoading, type, setType, rating, setRating }) {
  const classes = usestyles();
  const [elRefs, setElRefs] = useState([]);

  const createRefs = useCallback(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);

  useEffect(() => {
    createRefs();
  }, [createRefs, places]);

  const scrollToPlace = (index) => {
    if (elRefs[index]?.current) {
      elRefs[index].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants around you</Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3 Star</MenuItem>
              <MenuItem value={4}>Above 4 star</MenuItem>
            </Select>
          </FormControl>

          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <div
                  ref={elRefs[i]}
                  onClick={() => {
                    scrollToPlace(i);
                  }}
                >
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    key={i}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
