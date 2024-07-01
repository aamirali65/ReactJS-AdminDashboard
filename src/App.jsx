// src/App.js
import React from 'react';
import HeaderComponent from './components/header';
import SidebarComponent from './components/sidebar';
import MainComponent from './components/main';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <div className="flex flex-1">
        <SidebarComponent />
        <MainComponent />
      </div>
    </div>
  );
};

export default App;
