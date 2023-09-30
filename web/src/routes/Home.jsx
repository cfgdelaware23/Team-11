import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./landing.css"
import importImg from './logo.png';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useState, useEffect } from 'react';

export default function Home() {
    return (
    <div>
           <h1 className="header"> User Information Page</h1>
            
            <img className="logo3" src={importImg} alt='import' /><br />
            <p>
                Name:
            </p> <br />
            <p>
                ID:
            </p> <br />
            <p>
                Discount:
            </p> <br />
            </div>
    )
}