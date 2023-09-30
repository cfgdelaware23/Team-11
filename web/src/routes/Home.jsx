// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import Shop from './Shop';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
    const {state} = useLocation();
    console.log(state)
    return (
        <div>
            <h1>Home</h1>
                <p>
        {state.first_name + " " + state.last_name + " " + state.username + " " + state.password + " " + state.financialDetails}
        
    </p>
        </div>
    )

    
    // return (
    //     <Tabs
    //         defaultActiveKey="profile"
    //         id="uncontrolled-tab-example"
    //         className="mb-3 m-5 justify-center"
    //     >
    //         <Tab eventKey="home" title="Home">
    //             Tab content for Home
    //         </Tab>
    //         <Tab eventKey="profile" title="Shop">
    //             <Shop />
    //         </Tab>
    //     </Tabs>
    // );
}
