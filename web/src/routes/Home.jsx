import importImg from './logo.png';
import React, { useState, useEffect } from 'react';
import "./Home.css"
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
            
            <img className="logo3" src={importImg} alt='import' /><br />
            <h1 className="userName">Username: {userData.username}</h1>
            <h1 className="Name">Name: {userData.name}</h1>
            <h1 className="ID">ID: {userData._id}</h1>
            <h1 className="Discount">Discount: {userData.discount}</h1>
            <h1 className="Stars">Stars: {userData.currentStars}</h1>
            {/* <p>
            Username: {userData.username} <br />
            Name: {userData.name} <br />
            ID: {userData._id} <br />
            Discount: {userData.discount} <br />
            Stars: {userData.currentStars} <br/>
            </p> <br />
            <p>
            </p> <br /> */}
            </div>
    )
}