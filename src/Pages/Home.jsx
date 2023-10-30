import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [posts,setPosts]=useState([])
  const {check,setcheck}=useState(true)


  const handleDelete=(id)=>{
    axios.delete(`https://brave-wasp-tam.cyclic.app/posts/delete/${id}`,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      },
      params:{min:0,max:10}
    })
    .then((res)=>{
      setcheck(prev=>!prev)
      console.log(res)
    })
    .catch((err)=>{
      console.error(err)
    })
  }


  useEffect(()=>{
    axios.get("https://brave-wasp-tam.cyclic.app/posts/",{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      },
      params:{min:0,max:10}
    })
    .then((res)=>{
      setPosts(res.data)
      console.log(res)
    })
    .catch((err)=>{
      console.error(err)
    })
  },[check])
  return (
    <div>
      {posts.map((ele)=>{
        return <div key={ele._id}>
          <h3>title:{ele.title}</h3>
          <h4>body:{ele.body}</h4>
          <p>device:{ele.device}</p>
          <p>comments:{ele.no_of_comments}</p>
          <button>edit</button>
          <button onClick={()=>{handleDelete(ele._id)}}>delete</button>

        </div>
      })}
      
    </div>
  )
}
