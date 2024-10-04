import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../App.css'
import Reviewme from './Reviewme';
import UpdateContactInfo from './UpdateContactInfo';
import groupLogo from '../assets/KPT-Logo---01.png'
import logoWhite from '../assets/Karakafamily-logo---01.png'


function Home() {

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


    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then((data) => {
            setBackendData(data);
        }).catch((err) => {

        });


    }, [])


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

        <div className='background-wrapper h-100'>
            <div className="d-flex flex-column text-center text-white  justify-content-between" style={{ height: "250px" }} >
                <div>
                    <img src={groupLogo} style={{ height: '35px' }} alt="GroupLogo" />
                </div>
                <div >
                    <img src={logoWhite} style={{ height: '45px' }} alt="GroupLogo" />
                </div>
                <div className="fw-light h3 text-sub" >
                    We'd Love to Hear Your Thoughts and Feedback!
                    {(typeof backendData.users === 'undefined') ? (
                        <p>Loading ...</p>
                    ) : (
                        backendData.users.map((user, i) => (
                            <p key={i}> {user} </p>
                        ))
                    )}

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


                        <button type="submit">Send Email</button>
                    </form>

                </div>


                <div className='d-flex justify-content-center gap-3 mt-5'>
                    <button className='button' onClick={() => navigate('/reviewme')}>ReviewMe</button>
                    <button className='button' onClick={() => navigate('/updatecontact')}>Update Contact</button>
                </div>
            </div>


        </div >

    )
}

export default Home