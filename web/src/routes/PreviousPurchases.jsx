import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import './PreviousPurchases.css';
import logoImage from '../logo.png';

export default function PreviousPurchases(){
    function request(){
        alert("Thank you, we have recieved your feedback!");

    }
    const groceryProducts = [
        {
            name: "Organic Apples",
            price: 2.99,
            description: "Fresh, organic apples picked from local orchards.",
            category: "Fruits",
            weight: "1.5 lbs",
            inStock: true,
            discount: false,
            id: 0,
        },
        {
            name: "Sparkling Water",
            price: 2.99,
            description: "Beautifully fizzy water.",
            category: "Beverages",
            weight: "6 oz",
            inStock: false,
            discount: false,
            id: 3,
        },

        {
            name: "Orange Juice",
            price: 1.99,
            description: "The perfect thing to dip your oreos in.",
            category: "Beverages",
            weight: "6 oz",
            inStock: false,
            discount: false,
            id: 7,
        },
    ]
    return(
        <div className="PreviousPurchases">
        {/* <img className="logo" src={logoImage} alt='import'></img><br/> */}
        <h1 className="header">Here are your previous purchases: </h1>
        {/* <div className="PreviousContainer"></div> */}
        <div className='justify-center'>
                <Row>
                    {groceryProducts.map((product, index) => (
                        <Col xs={12} sm={7} md={4} lg={3} key={index}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                        ${product.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}