import React from 'react'
import homeicon from "../assets/Home.png";
import backInactive from "../assets/back-inactive.png";
import logo from '../assets/Karakafamily-logo---02.png';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='d-flex flex-row justify-content-center align-items-center  position-relative text-dark font-bold dropShadow bgNav w-100' style={{ height: "10vh" }}>
            <div className='d-flex flex-row  justify-content-start align-items-center ps-5 w-50' style={{ height: "100%" }}>
                <img src={logo} style={{ height: '45px' }} alt="Logo" />

            </div>
            <div className="d-flex flex-row  justify-content-center align-items-center gap-5 position-absolute top-0 end-0 bgBlock topbart-nav border border-danger" >
                <img src={backInactive} style={{ height: '30px' }} alt="Back Inactive" />
                <Link to="/" className='nav-link'><img src={homeicon} style={{ height: '25px' }} alt="GroupLogo" /></Link>
            </div>

        </nav >
    )
}

export default Navbar