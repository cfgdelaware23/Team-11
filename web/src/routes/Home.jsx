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
            
            <img className="logo3" src={importImg} alt='import' /><br />
            <p>
                Username: {username}
            </p> <br />
            <p>
            {JSON.stringify(userData)}
            </p> <br />
            <p>
            </p> <br />
            </div>
    )
}