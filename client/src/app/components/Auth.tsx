import axios from 'axios'

  export const postData = async(email:string,password:string)=>{
    const res = await axios.post("http://localhost:8000/api/auth/signup",{email,password});
    console.log(res)
  }

  export const verifyData = async(email:string,password:string)=>{
    const res = await axios.post("http://localhost:8000/api/auth/login",{email,password});
    console.log(res)
  }