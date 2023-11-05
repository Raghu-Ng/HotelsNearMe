import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359'
  },
  headers: {
    'X-RapidAPI-Key': '24973f9654mshd1d8a479abc5113p1b9e4djsnc35095c32bb9',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async () => {
    try{
        const {data : {data}} = await axios.get(URL, options);

        return data;
    }catch(error){
        console.log(error)

    }
}