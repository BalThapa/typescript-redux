import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomButton from './components/CustomButton/CustomButton';

import Layout from './components/Layout/Layout';
import UserSingle from './components/Users/UserSingle';

import About from './pages/About';

import UsersView from './pages/UsersView';

 

 

function App() {

  return (

    <div className="App">

     <CustomButton />
    

     <BrowserRouter>
     
     <Routes>

      <Route path="/" element={<Layout />} />

      <Route path="/about" element={<About />} />

      <Route path="/users" element={<UsersView />} />
      <Route path="/users/:userId" element={<UserSingle />} />

     </Routes>

     </BrowserRouter>

     

    </div>

  );

}

 

export default App;
