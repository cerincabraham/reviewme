import React, { useState, useEffect } from 'react';
import '../App.css';
import QRCode from "react-qr-code";

function ReviewQrcode({ callback }) {
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
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center pt-5 pb-5 '>
            <div className='text-white text-center pt-3'>
                <h1 className='textMain'>Please write positive review </h1>
                <h4 className='textSecondary'>Please scan the QR Code to get Google & Facebook review links</h4>
            </div>
            <div className=' d-flex flex-row  justify-content-around align-items-center gap-0 w-75'>

                <div className='d-flex flex-column align-items-center'>

                    <QRCode
                        size={200}
                        bgColor='white'
                        fgColor='green'
                        value={googleLInk}
                    />
                    <h4 className='textMain pt-2'>Google Review Link</h4>
                </div >
                <div className='d-flex flex-column align-items-center'>

                    <QRCode
                        size={200}
                        bgColor='black'
                        fgColor="#f4821e"
                        value={facebookLInk}
                    />
                    <h4 className='textMain pt-2'>Facebook Review Link</h4>
                </div>

            </div>

        </div>
    )
}

export default ReviewQrcode