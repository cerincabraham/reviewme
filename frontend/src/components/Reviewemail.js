import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import graphics01 from '../assets/reviewme-graphics02.png'
import { IoIosSend } from "react-icons/io";

function Reviewemail({ callback, OnEmailSent }) {

    const [googleLInk, setGoogleLink] = useState("");
    const [facebookLInk, setFacebookLink] = useState("");
    const [sendBtn, setSentBtn] = useState(true)
    const [emailData, setEmailData] = useState({
        to: '',
        name: '',
    });

    const navigate = useNavigate();

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



    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
        console.log("email data", emailData);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSentBtn(false);
        try {
            await axios.post('http://localhost:5000/send-email', {
                ...emailData,
                googlelink: googleLInk,   // Pass link1 to the backend
                facebooklink: facebookLInk,   // Pass link2 to the backend
            });
            OnEmailSent("linkEmailPopup");
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }

    };



    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white text-center pt-3'>
                <h1 className='textMain'>Thank You</h1>
                <h4 className='textSecondary'>Enter your email address to get Google & Facebook review links</h4>
            </div>
            <div className='text-white text-center'>
                <img src={graphics01} style={{ height: '130px' }} alt="graphics" />
            </div>
            <div>
                <h5 className='textSecondary'>Disclaimer:</h5>
                <h6 className='textSecondary '>We committed to value your privacy and we never save or collect your data.</h6>
            </div>
            <div className='mt-0 d-flex flex-column justify-content-between align-items-center' style={{ width: "65%" }}>

                <form onSubmit={handleSubmit} className=' textMain w-100 mt-2 d-flex flex-column justify-content-between align-items-left gap-1' >
                    <div className='d-flex  justify-content-between align-items-start' style={{ width: "100%" }}>
                        <label> Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter full name"
                            value={emailData.name}
                            onChange={handleChange}
                            required
                            style={{ width: "70%" }}
                        />
                    </div>
                    <div className='d-flex  justify-content-between align-items-start' style={{ width: "100%" }}>
                        <label> Email Address</label>
                        <input
                            type="email"
                            name="to"
                            placeholder="Enter email"
                            value={emailData.to}
                            onChange={handleChange}
                            required
                            style={{ width: "70%" }}
                        />
                    </div>


                    <div className='d-flex justify-content-center align-items-center w-100'>
                        <button className={`submitBtn ${sendBtn ? 'btnActive' : 'btnDeactive'}`} type="submit">Send <IoIosSend /> </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Reviewemail