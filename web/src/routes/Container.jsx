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
            <div className='w-2/3 -mb-24 ml-4 p-4'>
            <img className="logo3" src={importImg} alt='import' />
            </div>

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

            <Tab eventKey="FeedBack" title="Feedback">
                  
                <Feedback />
            </Tab>

        </Tabs>
       
        </div>
    );
}
