import React,{useEffect} from 'react'
import axios from 'axios'

  export const postData = async(email:string,pass:string)=>{
    const res = await axios.post("http://localhost:3001/users",{email,pass});
    console.log(res)
  }

