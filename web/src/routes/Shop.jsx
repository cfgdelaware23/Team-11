import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Shop() {
    function randomNumber() {
        var num = Math.floor(Math.random() * groceryProducts.length -1);
        return num;
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
        },
        {
            name: "Whole Grain Bread",
            price: 3.49,
            description: "Nutritious whole grain bread for a healthy diet.",
            category: "Bakery",
            weight: "24 oz",
            inStock: true,
            discount: true,
        },
        {
            name: "Fresh Spinach",
            price: 1.99,
            description: "Crisp and tender spinach leaves for your salads and dishes.",
            category: "Vegetables",
            weight: "8 oz",
            inStock: false,
            discount: false,
        },
    ];

    return (
       <div> 
        <h1>Product of the Day!</h1>
        <Container className='justify-center'>
            <Row>
                {groceryProducts.map((product, index) => (
                    <Col>
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
    );
}
