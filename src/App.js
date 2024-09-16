import React from 'react';
import './App.css';
import Home from './components/Home';
import Reviewme from './components/Reviewme';
import UpdateContactInfo from './components/UpdateContactInfo';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="Width 100%">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reviewme' element={<Reviewme />} />
            <Route path='/updatecontact' element={<UpdateContactInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>

  );
}

export default App;


