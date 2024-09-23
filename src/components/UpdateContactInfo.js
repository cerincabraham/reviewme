import React, { useState, useEffect } from 'react';
import homeicon from "../assets/Home.png";
import backInactive from "../assets/back-inactive.png";
import logo from '../assets/Karakafamily-logo---02.png';
import '../App.css';
import { faCheck, faTimes } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import QRCode from "react-qr-code";



import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function UpdateContactInfo() {

    const [googleLInk, setGoogleLink] = useState("");
    const [facebookLInk, setFacebookLink] = useState("");

    const fetchGoogleLink = () => {
        fetch("/Links/googleLink.txt")
            .then((response) => response.text())
            .then((text) => {
                setGoogleLink(text);
            })
            .catch((error) => console.error("Error reading the file: ", error));
    }

    const fetchFacebookLink = () => {
        fetch("/Links/facebookLink.txt")
            .then((response) => response.text())
            .then((text) => {
                setFacebookLink(text);
            })
            .catch((error) => console.error("Error reading the file: ", error));
    }

    useEffect(() => {
        fetchGoogleLink();
        fetchFacebookLink();
    }, []);

    return (
        <div className='d-flex flex-column align-items-center bg-praimary'>
            <nav className='d-flex flex-row justify-content-evenly align-items-center text-dark font-bold topbar w-100 ' style={{ height: "10vh" }}>
                < div className='d-flex flex-row  justify-content-around align-items-center ' style={{ height: "100%", width: "85%" }
                }>
                    <img src={logo} style={{ height: '45px' }} alt="Logo" />
                </ div>
                <div className="d-flex flex-row  justify-content-center align-items-center gap-5 bg-block topbart-nav" >
                    <img src={backInactive} style={{ height: '30px' }} alt="Back Inactive" />
                    <Link to="/" className='nav-link'><img src={homeicon} style={{ height: '25px' }} alt="GroupLogo" /></Link>
                </div>
            </nav >
            <div className=' d-flex flex-column justify-content-start align-items-center border border-danger w-50' style={{ height: "90vh" }}>
                <div className=' d-flex flex-column justify-content-evenly align-items-center border border-success' style={{ height: "20%" }}>
                    <div className=''>
                        Update Contact Info
                    </div>

                </div>
                <h1>Text File Content</h1>
                <div className=' d-flex flex-row  justify-content-center align-items-center border border-danger gap-5 w-100'>

                    <div className='d-flex flex-column align-items-center'>
                        <pre>Google Link</pre>
                        <QRCode
                            size={200}
                            bgColor='White'
                            fgColor='Red'
                            value={googleLInk}
                        />
                    </div >
                    <div style={{ width: "10%" }}></div>
                    <div className='d-flex flex-column align-items-center'>
                        <pre>Facebook Link</pre>
                        <QRCode
                            size={200}
                            bgColor='White'
                            fgColor="Black"
                            value={facebookLInk}
                        />
                    </div>

                </div>

            </div >

        </div >
    )
}

export default UpdateContactInfo