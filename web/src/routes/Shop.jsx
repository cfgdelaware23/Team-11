import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./landing.css"
import importImg from './logo.png';

export default function Shop() {
    function displayProductofTheDay() {
        var num = Math.floor(Math.random() * groceryProducts.length);
        console.log(num);
        let answer = "";
        const productToFind = groceryProducts.find(product => product.id === num);
        if (productToFind) {
            const { name, description, price } = productToFind;
            answer += `${name}.`;
            answer += ` ${description} `;
            answer += `$${price}.`;
         }
        return answer;
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
            name: "Whole Grain Bread",
            price: 3.49,
            description: "Nutritious whole grain bread for a healthy diet.",
            category: "Bakery",
            weight: "24 oz",
            inStock: true,
            discount: true,
            id: 1,
        },
        {
            name: "Fresh Spinach",
            price: 1.99,
            description: "Crisp and tender spinach leaves for your salads and dishes.",
            category: "Vegetables",
            weight: "8 oz",
            inStock: false,
            discount: false,
            id: 2,
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
            name: "Sugar Free Soda",
            price: 1.99,
            description: "Beautifully fizzy and sugar free soda.",
            category: "Beverages",
            weight: "6 oz",
            inStock: false,
            discount: false,
            id: 4,
        },
        {
            name: "Strawberries",
            price: 5.99,
            description: "Everyone's favorite fruit!",
            category: "Fruits",
            weight: "6 oz",
            inStock: false,
            discount: false,
            id: 5,
        },
        {
            name: "Pretzels",
            price: 1.99,
            description: "Cripsy and salted original tiny twists",
            category: "Snacks",
            weight: "6 oz",
            inStock: false,
            discount: false,
            id: 6,
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
        
    ];

    return (
       <div> 
        <h1 className="header">Product of the Day: {displayProductofTheDay()}</h1>
        <img className="logo3" src={importImg} alt='import'></img><br/>
        
        
        <Container className='justify-center'>
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
        </Container>
        </div>
    );
}
