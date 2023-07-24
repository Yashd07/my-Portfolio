import React from 'react';
import './App.css';
import { Nav,Home,About,Portfolio, Footer , Contact} from './component';
import {Route, useLocation, Routes } from 'react-router-dom';


function App() {
  const location = useLocation();
  return (
    <div className='overflow-hidden bg-custom' >
      <Nav/>
      <div key={location.pathname}>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/About" Component={About}/>
          <Route path="/Portfolio" Component={Portfolio}/>
          <Route path="/Contact" Component={Contact}/>
        </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;

