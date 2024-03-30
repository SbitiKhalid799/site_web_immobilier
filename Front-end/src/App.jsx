import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Visitor from './Component/Visitor';
import Navigation from './Component/Navigation';
import User from './Component/User';
import Login from './Component/Login';
import Singup from './Component/Singup';
import Offer from './Component/Offer';
import Favorite from './Component/Favorite';
import Detaile from './Component/Detaile';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex align-items-center justify-content-center'>
        <Navigation />
      </div>
        <Routes>
          <Route path='/' element={<Visitor/>} />
          <Route path='/User' element={<User/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Singup' element={<Singup/>} />
          <Route path='/Offer' element={<Offer/>} />
          <Route path='/Favorite' element={<Favorite/>} />
          <Route path='/Detaile' element={<Detaile/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


