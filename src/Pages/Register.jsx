import axios from 'axios'
import React, { useState } from 'react'

export default function Register() {

  const [user,setUser]=useState({
    name:"",
    email:"",
    gender:"",
    password:"",
    age:"",
    city:"",
    is_married:""

  })


  const handleRegister=()=>{
    console.log(user)
    axios.post("https://brave-wasp-tam.cyclic.app/users/register",user)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div>
      <h1> Register</h1>
      <input type="text" value={user.name} placeholder='name' onChange={(e)=>{
        setUser((prev=>{
          return {...prev,name:e.target.value}
        }))
      }} />
      <input type="email" placeholder='email' value={user.email} onChange={(e)=>{
        setUser((prev=>{
          return {...prev,email:e.target.value}
        }))
      }} />
      <input placeholder='password' type="password" value={user.password} onChange={(e)=>{
        setUser((prev=>{
          return {...prev,password:e.target.value}
        }))
      }} />
      <input placeholder='age' type="text" value={user.age} onChange={(e)=>{
        setUser((prev=>{
          return {...prev,age:e.target.value}
        }))
      }} />
      <input placeholder='city' type="text" value={user.city} onChange={(e)=>{
        setUser((prev=>{
          return {...prev,city:e.target.value}
        }))
      }} />

      <select onChange={(e)=>{
        setUser((prev=>{
          return {...prev,gender:e.target.value}
        }))
      }}>
        <option value=""> select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select onChange={(e)=>{
        setUser((prev=>{
          return {...prev,is_married:e.target.value}
        }))
      }}>
        <option value="">is married</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <button onClick={handleRegister}>Register</button>
      
      
      
      
      
    </div>
  )
}
