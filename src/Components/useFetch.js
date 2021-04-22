import {useEffect , useState} from 'react';
import axios from 'axios';



function useFetch(url) {
    const [loading , setLoading] = useState(false);
    const [data , setData] = useState([])

    // fetch data 
     useEffect(() => { 
       const fetchData = async () => {
          try {
            const res = await axios.get(url);
            if(!res.ok){
              
            }
            setLoading(true);
            setData(res.data);
          }catch (err) {
            console.log(err);
          }
       }
         fetchData();
    } ,[url]);

    return {loading , data }
}

export default useFetch
