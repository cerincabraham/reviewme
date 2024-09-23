import React, { useState, useEffect } from 'react';
import NavLink from './Navbar';
import '../App.css';
import QRCode from "react-qr-code";


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
            <NavLink />
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