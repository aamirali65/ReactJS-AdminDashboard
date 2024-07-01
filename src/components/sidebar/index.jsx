import React from 'react';

const SidebarComponent = () => {
  return (
    <div className=" w-1/5 h-full my-10">
      <div className="options m-5 flex flex-col gap-5">
        <div className="option font-body flex items-center gap-5 text-center bg-blue-600 text-white p-5 rounded-lg cursor-pointer">
            <i className='fa fa-home'></i>
            <span>Home</span>
        </div>
        <div className="option font-body flex items-center gap-5 text-center bg-gray-100 p-5 rounded-lg cursor-pointer">
            <i className='fa fa-dashboard'></i>
            <span>Dashboard</span>
        </div>
        <div className="option font-body flex items-center gap-5 text-center bg-gray-100 p-5 rounded-lg cursor-pointer">
            <i className='fa fa-history'></i>
            <span>Records</span>
        </div>
        <div className="option font-body flex items-center gap-5 text-center bg-gray-100 p-5 rounded-lg cursor-pointer">
            <i className='fa fa-users'></i>
            <span>Users</span>
        </div>
        <div className="option font-body flex items-center gap-5 text-center bg-gray-100 p-5 rounded-lg cursor-pointer">
            <i className='fa fa-arrow-left'></i>
            <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
