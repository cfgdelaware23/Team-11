import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Shop from './Shop';
import importImg from './logo.png';
import Home from './Home';

export default function Container() {
    return (
        <div>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 m-5 justify-center"
        >
            
            <Tab eventKey="home" title="Home">
            <Home />
            </Tab>
            
            <Tab eventKey="profile" title="Shop">
                  
                <Shop />
            </Tab>
        </Tabs>
       
        </div>
    );
}
