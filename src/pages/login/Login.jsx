import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handelChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const { data } = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`, {email:user.email, password:user.password});
    setUser({
      email:'',
      password:'',
     
    });
    console.log(data);
  }


  return (
    <>
     <form onSubmit={handleSubmit}>
     <label>email</label>
        <input type="email" value={user.email} name="email" onChange={handelChange} />

        <label>password</label>
        <input type="password" value={user.password} name="password" onChange={handelChange} />

        <button type="submit"></button>
    
      
     </form>
    
    </>
  )
}
