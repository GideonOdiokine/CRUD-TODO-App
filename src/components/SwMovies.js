import React, { useEffect }   from "react";
import { useState } from "react";

const SwMovies = ()=>{
    

    const [number, setNumber]= useState(1);
    const [movies, setMovies] = useState('')

    useEffect(()=>{
        async function getData(){
            let response = await `http://swapi.co/api/films/${number}`
            fetch(response).then((res)=>{
                console.log(res.data)
                setMovies(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getData();
    },[number])

   let nums = [1,2,3,4,5,6,7].map((num)=>(
       <option value={num} key={num}>{num}</option>
   ))
   
 return(
    <div>
         <h5>Pick a Movie</h5>
         <p>{movies.title}</p>
         <select value={number} onChange={(e)=>setNumber(e.target.value)}>
            {nums}
         </select>
    </div>
 )
}

export default SwMovies;