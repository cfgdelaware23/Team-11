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
                       <Card.Img variant="top" src="holder.js/100px180" />
                       <Card.Body>
                           <Card.Title>Card Title</Card.Title>
                           <Card.Text>
                               Some quick example text to build on the card title and make up the
                               bulk of the card's content.
                           </Card.Text>
                           <Button variant="primary">Go somewhere</Button>
                       </Card.Body>
                   </Card>
               </Col>
           ))}
       </Row>
   </Container>
   </div>
       
    );
}
