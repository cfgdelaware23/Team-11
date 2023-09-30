
import "./landing.css";
import importImg from './logo.png';
import React, { useState, useEffect } from 'react';
import "./Home.css"
import { useLocation, useNavigate } from 'react-router-dom';
import AppleImage from './food_images/apple.png';
import AvocadoImage from './food_images/avocado.png';
import AlmondImage from './food_images/almond.png';
import BlueberryImage from './food_images/blueberry.png';
import BroccoliImage from './food_images/broccoli.png';
import CarrotImage from './food_images/carrot.png';
import CauliflowerImage from './food_images/cauliflower.png';
import KaleImage from './food_images/kale.png';
import SpinachImage from './food_images/spinach.png';
import QuinoaImage from './food_images/quinoa.png';
import ChickenImage from './food_images/chicken.png';
import SalmonImage from './food_images/salmon.png';
import SweetPotatoImage from './food_images/sweet_potato.png';
import TomatoImage from './food_images/tomato.png';
import GreenTeaImage from './food_images/green_tea.png';
import OliveOilImage from './food_images/olive_oil.png';
import BlackBeansImage from './food_images/black_beans.png';
import TofuImage from './food_images/tofu.png';
import HoneyImage from './food_images/honey.png';
import GarlicImage from './food_images/garlic.png';


export default function Home() {
    const navigate = useNavigate();
    const food_dictionary = {
        1: [AppleImage, "Organic Apple", "Fruits", "$1.50"],
        2: [AvocadoImage, "Organic Avocado", "Fruits", "$2.00"],
        3: [AlmondImage, "Raw Almonds", "Nuts", "$5.99"],
        4: [BlueberryImage, "Organic Blueberries", "Fruits", "$4.00"],
        5: [BroccoliImage, "Organic Broccoli", "Vegetables", "$2.50"],
        6: [CarrotImage, "Organic Carrots", "Vegetables", "$1.99"],
        7: [CauliflowerImage, "Organic Cauliflower", "Vegetables", "$3.00"],
        8: [KaleImage, "Organic Kale", "Vegetables", "$2.99"],
        9: [SpinachImage, "Organic Spinach", "Vegetables", "$2.50"],
        10: [QuinoaImage, "Organic Quinoa", "Grains", "$4.99"],
        11: [ChickenImage, "Organic Chicken Breast", "Meat", "$6.99"],
        12: [SalmonImage, "Wild Caught Salmon", "Fish", "$9.99"],
        13: [SweetPotatoImage, "Organic Sweet Potato", "Vegetables", "$1.00"],
        14: [TomatoImage, "Organic Tomato", "Vegetables", "$1.50"],
        15: [GreenTeaImage, "Organic Green Tea", "Beverages", "$3.50"],
        16: [OliveOilImage, "Extra Virgin Olive Oil", "Oils", "$7.99"],
        17: [BlackBeansImage, "Organic Black Beans", "Legumes", "$2.00"],
        18: [TofuImage, "Organic Tofu", "Protein", "$3.99"],
        19: [HoneyImage, "Raw Honey", "Sweeteners", "$6.50"],
        20: [GarlicImage, "Organic Garlic", "Vegetables", "$0.99"]
    }

  const location = useLocation();
  const { username, password } = location.state;
  const [userData, setUserData] = useState({});
  const [purchaseHistory, setPurchaseHistory] = useState([]);

//   const handleFeedback = () => {
//     navigate('/feedback', {
//       state: {
//         username: username
//       },
//     });
//   }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/user/${username}`);
        const data = await res.json();
        setUserData(data);
        console.log(data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
    }
  };
    fetchData();
  }, [username]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/user/${username}`);
        const data = await res.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUserData();

    const fetchPurchaseHistory = async () => {
      try {
        const res = await fetch(`http://localhost:3000/admin/userPurchaseHistory/${username}`);
        const data = await res.json();
        setPurchaseHistory(data.history);
        console.log(data.history);
      } catch (error) {
        console.error("Error fetching purchase history: ", error);
      }
    };
    fetchPurchaseHistory();
  }, [username]);

  return (
    <div>
        
      <h1 className="header">User Information Page</h1>
      
      <p className="text-red-900 w-9/12 mx-auto text-xl">
        Username: {userData.username} <br />
        Name: {userData.name} <br />
        {/* ID: {userData._id} <br /> */}
        Discount: {userData.discount*100} % <br />
        Stars: {userData.currentStars} <br />
      </p> <br />
      <div className="w-9/12 mx-auto">
      <h1 className="text-2xl font-semibold">
              Previous Purchases
      </h1>
      <br />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Image</th>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {purchaseHistory.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={food_dictionary[item][0]} alt="Product Image" className="w-8 h-8 object-cover rounded-full" />
                  </td>
                  <td className="px-6 py-4">{food_dictionary[item][1]}</td>
                  <td className="px-6 py-4">{food_dictionary[item][2]}</td>
                  <td className="px-6 py-4">{food_dictionary[item][3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
}



