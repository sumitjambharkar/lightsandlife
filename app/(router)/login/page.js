"use client"
import config from '@/app/config';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const page = () => {

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const sendData =async(e)=>{
    e.preventDefault()
    if (!email|| !password) {
      Swal.fire({
        title: `Input Field Required`,
        text: "You clicked the button!",
        icon: "error"
      });
    }else{
      try {
        const result = await axios.post(`${config}/api/login`,{email,password})
        console.log(result);
        if(result.status===200){
          Swal.fire({
            title: `${result.data.message}`,
            text: "You clicked the button!",
            icon: "success"
          });
          window.location.reload()
          router.push("/add-service")
        }
      } catch (error) {
        Swal.fire({
          title: `${error.response.data.message}`,
          text: "You clicked the button!",
          icon: "error"
        });
      }
    }

  }

  return (
    <div class="login-container">
    <form onSubmit={sendData}  class="login-form" >
        <h2>Login</h2>
        <div class="input-group">
            <label for="username">Username</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" required/>
        </div>
        <div class="input-group">
            <label for="password">Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  required/>
        </div>
        <button type="submit">Login</button>
    </form>
</div>
  )
}

export default page