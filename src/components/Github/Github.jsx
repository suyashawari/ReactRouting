

import { useState ,useEffect} from "react";
import {
  useLoaderData,
} from "react-router-dom";

const Github = () => {
    // const data=useLoaderData()
const[data,setdata]=useState([]);
    useEffect(() =>{
        fetch('https://api.github.com/users/suyashawari')
        .then((res)=>res.json())
        .then(data=>{setdata(data)
            console.log(data)
        })
    },[])
  return (
   < >
   <div className='flex items-center justify-center flex-col w-full bg-gray-600'>
   <div className='text-center bg-gray-600 text-white px-5 py-3 font-semibold w-full '>Github followers:{data?.followers}</div>

   <img className='text-center bg-gray-600 text-white px-5 py-3 font-semibold ' src={data?.avatar_url} width={200} height={200}/>
   </div>
   </>
  )
}

export default Github

export const GithubdataFetch=async()=>{
const responce=await fetch('https://api.github.com/users/suyashawari')
return responce.json()
}