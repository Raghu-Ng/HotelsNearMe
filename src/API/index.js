import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (type, sw, ne) => {
    try{
        const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
         {  params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': '34ac606514mshdfee98baea4fc17p1e0586jsn3e7f7bf535a9',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }});

        return data;
    }catch(error){
        console.log(error)

    }
}