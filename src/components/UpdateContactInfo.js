import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function UpdateContactInfo() {

    return (
        <div className='fw-bold h3'>

            <nav className='d-flex flex-row justify-content-evenly  bg-black text-white font-bold '>
                <h1>KarakaFamilyHealth</h1>
                <Link to="/" className='nav-link'>Home</Link>
            </nav>


            Update Contact Info
        </div>
    )
}

export default UpdateContactInfo