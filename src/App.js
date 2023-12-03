import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Feed } from '@mui/icons-material';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header/>

      {/* App Body */}
      <div className='app__body'>
          <Sidebar />
          <Feed />
          {/* Feed - Central part */}
          {/* Widgets - right part */} 

      </div>






    </div>
  );
}

export default App;
