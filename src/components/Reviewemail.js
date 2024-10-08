import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import graphics01 from '../assets/reviewme-graphics02.png'
import { IoIosSend } from "react-icons/io";

function Reviewemail({ callback }) {
    const [link1, setLink1] = useState('');
    const [link2, setLink2] = useState('');

    const [backendData, setBackendData] = useState([{}]);
    const [emailData, setEmailData] = useState({
        to: '',
        name: '',
    });


    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
        console.log("email data", emailData);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const responseLink1 = await fetch('/Links/googleLink.txt');
            const link1Text = await responseLink1.text();
            setLink1(link1Text);

            const responseLink2 = await fetch('/Links/facebookLink.txt');
            const link2Text = await responseLink2.text();
            setLink2(link2Text);


            await axios.post('http://localhost:5000/send-email', {
                ...emailData,
                googlelink: link1Text,   // Pass link1 to the backend
                facebooklink: link2Text,   // Pass link2 to the backend
            });
            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }

    };

    const navigate = useNavigate();

    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white text-center pt-3'>
                <h1 className='textMain'>Thank You</h1>
                <h4 className='textSecondary'>Enter your email address to get Google & Facebook review links</h4>
            </div>
            <div className='text-white text-center'>
                <img src={graphics01} style={{ height: '90px' }} alt="graphics" />

            </div>
            <div>

                <form onSubmit={handleSubmit} className=' textMain w-100 mt-2 d-flex flex-column justify-content-between align-items-left gap-1'>
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


                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='d-flex gap-4 pt-2'>
                <button className='reviewBtn btnColorHappy d-flex justify-content-center align-items-center gap-2' onClick={() => callback("email")}> Email <IoIosSend />  </button>
            </div>
        </div>
    )
}

export default Reviewemail