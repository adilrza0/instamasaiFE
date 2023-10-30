import axios from 'axios'
import React, { useState } from 'react'

export default function Addpost() {

  const [user,setUser]=useState({
    title:"",
    body:"",
    device:"",
    no_of_comments:"",
    

  })


  const handleRegister=()=>{
    console.log(user)
    axios.post("https://brave-wasp-tam.cyclic.app/posts/add",user,{
        headers:{
          Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div>
      <h1> Add post</h1>
      <input type="text" value={user.title} placeholder='title' onChange={(e)=>{
        setUser((prev=>{
          return {...prev,title:e.target.value}
        }))
      }} />
      <textarea rows="10" cols="15" value={user.body} onChange={(e)=>{
        setUser((prev=>{
          return {...prev,body:e.target.value}
        }))
      }} />
      <input type="text" value={user.device} placeholder='device' onChange={(e)=>{
        setUser((prev=>{
          return {...prev,device:e.target.value}
        }))
      }} />
      <input type="number" value={user.no_of_comments} placeholder='Comments' onChange={(e)=>{
        setUser((prev=>{
          return {...prev,no_of_comments:e.target.value}
        }))
      }} />
      

      <button onClick={handleRegister}>Add Post</button>
      
      
      
      
      
    </div>
  )
}
