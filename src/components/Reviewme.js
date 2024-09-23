import React from 'react'
import homeicon from "../assets/Home.png"
import logo from '../assets/Karakafamily-logo---02.png'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
function Reviewme() {
    return (
        <div className='fw-bold h3'>
            <nav className='d-flex flex-column justify-content-evenly  text-dark font-bold topbar ' style={{ height: "80px" }}>
                <div className='d-flex flex-row  justify-content-around align-items-center'>
                    <div >
                        <img src={logo} style={{ height: '45px' }} alt="GroupLogo" />
                    </div>
                    <Link to="/" className='nav-link'><img src={homeicon} style={{ height: '35px' }} alt="GroupLogo" /></Link>

                </div>
            </nav>
            Review Me
        </div>
    )
}

export default Reviewme