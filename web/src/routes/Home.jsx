import "./landing.css"
import importImg from './logo.png';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
  const { username, password } = location.state;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/user/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  })

    return (
    <div>
           <h1 className="header"> User Information Page</h1>
           <img className="logo3" style={{padding:"20px", background:"white", borderRadius:"50%", width:"fit-content"}} src={importImg} alt='import' />
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
              <div style={{ minWidth:"250px", padding:"10px", borderRadius:"6px", background: "#c6def1" }}>
                <p style={{marginBottom:"10px"}}>Username: {userData.username}</p>
                <p style={{marginBottom:"10px"}}>Name: {userData.name}</p>
                {/* <p style={{marginBottom:"10px"}}>ID: {userData._id}</p> */}
                <p style={{marginBottom:"10px"}}>Discount: {userData.discount}</p>
                <p style={{marginBottom:"10px"}}>⭐: {userData.currentStars}</p>
              </div>
            </div>
            <br />
            <p>
            </p> <br />
            </div>
    )
}