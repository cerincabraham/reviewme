import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function Reviewme() {
    return (
        <div className='fw-bold h3'>
            <nav className='d-flex flex-row justify-content-evenly  bg-black text-white font-bold '>
                <h1>KarakaFamilyHealth</h1>
                <Link to="/" className='nav-link'>Home</Link>
            </nav>
            Reviewme
        </div>
    )
}

export default Reviewme