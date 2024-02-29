import React from 'react'

import Axios  from "axios"
//import{ useCookies} from 'react-cookie'
import { useState } from "react";
//import { useNavigation } from 'react-router-dom';

function Home() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [fullname,setFullname]=useState("")
 // const navigate = useNavigation();

  //const [,setCookies] = useCookies(["access_token"])

  const onSubmit = async (e)=>{
      e.preventDefault();
     const response= await Axios.post("http://localhost:3000/employee/login",{
          email,password
      })
      console.log("response.message",response.data.message)
      console.log("response",response)
      if(response.data.message ==="email or password is not correct"){
        alert(response.data.message)
        console.log("error")
      }else{
        
        console.log("true")
      window.location="seplm"
        
        //navigate("medecin")

        
      }
  }

  const onSubmit1 = async (e)=>{
    e.preventDefault();
   const response= await Axios.post("http://localhost:3000/employee/createEmployee",{
    fullname,email,password
    })
   
    console.log("response",response)
    
    }







  return (
    <>
    <h1>login</h1>
    <form onSubmit={onSubmit}>
      <label>Email address :</label>
      <input type='text'  value={email}
                  onChange={e => setEmail(e.target.value)} />
      
      <br></br>
      <label>Password : </label>
      <input type='text'  value={password}
                  onChange={e => setPassword(e.target.value)} />
      <br>
      </br>
    <button  type="submit">login</button>            

    </form>

    <h1>new</h1>
    <form onSubmit={onSubmit1}>
    <label>fullname :</label>
      <input type='text'  value={fullname}
                  onChange={e => setFullname(e.target.value)} />
      
      <br></br>
      <label>Email address :</label>
      <input type='text'  value={email}
                  onChange={e => setEmail(e.target.value)} />
      
      <br></br>
      <label>Password : </label>
      <input type='text'  value={password}
                  onChange={e => setPassword(e.target.value)} />
      <br>
      </br>
    <button  type="submit">new</button>            

    </form>
   
   </>
  )
  }

export default Home