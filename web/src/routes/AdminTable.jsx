import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

export default function AdminTable() { 

      const [userData, setUserData] = useState([]);
    
      useEffect(() => {
        fetch('http://localhost:3000/admin/allCustomers')
            .then(res => res.json())
            .then(data => {setUserData(data) 
            console.log(data)})
            
      });


return (
    <div>
    <div className="w-9/12 mx-auto">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">ID</th>
        <th scope="col" className="px-6 py-3">Name</th>
        <th scope="col" className="px-6 py-3">Discount</th>
        <th scope="col" className="px-6 py-3">Username</th>
        <th scope="col" className="px-6 py-3">Stars</th>
      </tr>
    </thead>
    <tbody>
      {userData.map((item, index) => (
           <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
           <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray">{item._id}
          </td>
          
          <td className="px-6 py-4">{item.name}</td>
          <td className="px-6 py-4">{item.discount}</td>
          <td className="px-6 py-4">{item.username}</td>
          <td className="px-6 py-4">{item.currentStars}</td>
          <td className="px-6 py-4"></td>
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

