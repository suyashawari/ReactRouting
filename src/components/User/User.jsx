import React from 'react'
import {  useParams} from "react-router-dom";
const User = () => {
    let {userid}=useParams();
    
  return (
    
    <div>User:{userid}</div>
  )
}

export default User