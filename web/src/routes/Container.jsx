import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Shop from './Shop';
import Home from './Home';
import Feedback from './FeedBack';

export default function Container() {
    return (
        <div>
        <Tabs
            defaultActiveKey="home" 
            id="uncontrolled-tab-example"
            className="mb-3 m-5 justify-center"
        >
            
            <Tab eventKey="home" title="Home">
            <Home />
            </Tab>
            
            <Tab eventKey="profile" title="Shop">
                  
                <Shop />
            </Tab>

            <Tab eventKey="FeedBack" title="FeedBack">
                  
                <Feedback />
            </Tab>

        </Tabs>
       
        </div>
    );
}
