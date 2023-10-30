import React,{useState} from 'react'
import axios from 'axios'

export default function Login() {
  const [user,setUser]=useState({
    
    email:"",
    password:"",

  })


  const handleRegister=()=>{
    console.log(user)
    axios.post("https://brave-wasp-tam.cyclic.app/users/login",user)
    .then((res)=>{
      console.log(res)
      localStorage.setItem("token",res.data.token)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div>
      <h1> Login</h1>
      
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
    

      <button onClick={handleRegister}>Login</button>
      
      
      
      
      
    </div>
  )
}
