import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'; 
// import './style.css';

import useStyles from './styles';

export default function Header( setCoordinates) {

    const classes = useStyles();
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat();
      const lng = autocomplete.getPlace().geometry.location.lng();
  
      setCoordinates({ lat, lng });
    };
  

  return (
    <AppBar className={classes.appbar} position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h5" className={classes.title}>
                Hotels Near Me
            </Typography>
            < Box display='flex'>
                <Typography variant="h6" className={classes.title}>
                    See More Places
                </Typography>
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input:classes.inputInput}}/>
                    </div>
                </Autocomplete>   
            </Box>
        </Toolbar>
    </AppBar>
  )
}


// return (
//     <div className="header">
//     {/* <AppBar position='static'> */}
//         <Toolbar className='toolBar'>
//             <div className="head">
//             <Typography variant="h5" className ='title'>
//                 Hotels Near Me
//             </Typography>
//             </div>
//             <div className="box">
//             < Box display='flex'>
//                 <Typography variant="h6" className= 'title'>
//                     See More Places
//                 </Typography>
//                 {/* <Autocomplete> */}
//                     <div className='search'>
//                         <div className='searchIcon'>
//                             <SearchIcon />
//                         </div>
//                         <InputBase placeholder='         Search...'/>
//                     </div>
//                 {/* </Autocomplete>    */}
//             </Box>
//             </div>
//         </Toolbar>
//     {/* </AppBar> */}
//     </div>
//   )
// }
