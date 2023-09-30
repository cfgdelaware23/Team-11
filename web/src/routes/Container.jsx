import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Shop from './Shop';
import Home from './Home';
import Feedback from './Feedback';
import PreviousPurchases from './PreviousPurchases'
import importImg from './logo.png';


export default function Container() {
    return (
        
        <div>
<img className="logo3 mt-4 ml-4" src={importImg} alt='import' class="w-24" />

        <Tabs
            defaultActiveKey="home" 
            id="uncontrolled-tab-example"
            className="m-5 justify-center"
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
