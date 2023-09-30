import "./landing.css"
import importImg from './logo.png';

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const location = useLocation();
  const { username, password, userData } = location.state;

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