import axios from 'axios'
import { toast } from 'react-toastify';

export const postData = async (email: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:8000/api/auth/signup", { email, password });
    toast.success('Signed up successfully');
    console.log(res)
  } catch (err: any) {
    if (err.response && err.response.data && err.response.data.msg === "user already exists") {
      toast.error('Email already exists');
    } else {
      toast.error('Signup failed');
    }
  }
}

export const verifyData = async (email: string, password: string) => {
  try {
    const res = await axios.post("http://localhost:8000/api/auth/login", { email, password });
    toast.success('Signed in successfully');
    console.log(res)
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      toast.error('Not signed up');
    } else {
      toast.error('Signin failed');
    }
  }
}