import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { object, string } from 'yup';
import * as  Yup from 'yup';


export default function Signup() {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    image: '',
  });

const [errors, setErrors]=useState([]);

  const handelChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validateData= async ()=>{
   const registerSchema= object({
      userName: string().min(5).max(20).required(),
      email:string().email(),
      password:string().min(8).max(20).required(),
      image:string().required(),
    });
    try{
      await registerSchema.validate(user,{abortEarly:false});
      return true;

    }catch(error){
      console.log("validation error", error.errors);
      setErrors(error.errors)
      return false;
    }

    

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (await validateData()){
      const formData = new FormData();
    formData.append('userName', user.userName);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('image', user.image);
    const { data } = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`, formData);
    setUser({
      userName:'',
      email:'',
      password:'',
      image:'',
    });
    console.log(data);
      
    }
    
  };
  const handelImageChange = async e => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };
  

  return (
    <>
    {errors.length >0?errors.map(error=>
      <p>{error}</p>
      
      ):''}
      <form onSubmit={handleSubmit}>
        <label>user name</label>
        <input type="text" value={user.userName} name="userName" onChange={handelChange} />

        <label>email</label>
        <input type="email" value={user.email} name="email" onChange={handelChange} />

        <label>password</label>
        <input type="password" value={user.password} name="password" onChange={handelChange} />

        <label>image</label>
        <input type="file" name="image" onChange={handelImageChange} />

        <button type="submit"></button>
      </form>
    </>
  );
}
