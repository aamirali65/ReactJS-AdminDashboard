import React from 'react';

const MainComponent = () => {
  return (
    <div className="bg-gray-100 w-4/5 p-4">
      <div className="flex gap-5">
        <div className="card flex flex-col gap-5 bg-white rounded-lg p-5 w-1/3">
            <i className='fa fa-money text-4xl text-red-500'></i>
            <strong className='text-xl'>$ 35,0000</strong>
            <span>Total Sales</span>
        </div>
        <div className="card flex flex-col gap-5 bg-white rounded-lg p-5 w-1/3">
            <i className='fa fa-user text-4xl text-blue-500'></i>
            <strong className='text-xl'>$ 35,0000</strong>
            <span>Total Users</span>
        </div>
        <div className="card flex flex-col gap-5 bg-white rounded-lg p-5 w-1/3">
            <i className='fa fa-coins text-4xl text-yellow-500'></i>
            <strong>$ 25,0000</strong>
            <span>Total Profit</span>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
