import React from 'react';

const HeaderComponent = () => {
  return (
    <div className="bg-blue-600 w-full h-16 flex justify-between items-center p-4 px-10 text-white">
      <h1 className="text-xl font-body">Admin Dashboard</h1>
      <div className="img cursor-pointer">
        <img src="https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1719705600&semt=ais_user" className='w-8 object-cover h-8 rounded-[50%]' alt="" />
      </div>
    </div>
  );
};

export default HeaderComponent;
