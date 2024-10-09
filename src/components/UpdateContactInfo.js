import React, { useState, useEffect } from 'react';
import NavLink from './Navbar';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import graphics01 from '../assets/reviewme-graphics02.png'
import { IoIosSend } from "react-icons/io";

function UpdateContactInfo() {
    const [emailData, setEmailData] = useState({
        to: '',
        name: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmailData({ ...emailData, [e.target.name]: e.target.value });
        console.log("email data", emailData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            //await axios.post('http://localhost:5000/send-feedback', {
            //   ...emailData
            //});
            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
        navigate('/')
    };

    return (
        <div className='d-flex flex-column align-items-center bg-praimary'>
            <NavLink />
            <div className=' d-flex flex-column justify-content-start align-items-center border border-danger w-50' style={{ height: "90vh" }}>
                <div className=' blockSection  bgBlock d-flex flex-column justify-content-start align-items-center' style={{ height: "90%" }}>
                    <div className='text-white text-center'>
                        <h2 className='textMain'>We Value Your Feedback</h2>
                        <h5 className='textSecondary'>Sorry to hear that!. Help Us Uyderstand how we can improve</h5>
                    </div>
                    <div className='mt-0 d-flex flex-column justify-content-between align-items-center' style={{ width: "75%" }}>
                        <form onSubmit={handleSubmit} className=' textMain w-100 mt-2 d-flex flex-column justify-content-between align-items-left gap-1' >
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> First Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter First Name"
                                        value={emailData.firstname}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className='d-flex flex-column  justify-content-between align-items-start ' style={{ width: "48%" }}>
                                    <label> Last Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Last Name"
                                        value={emailData.lastname}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> Mobile Number</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        pattern="[789][-][0-9]{9}"
                                        placeholder="Enter Mobile Number"
                                        value={emailData.mobile}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={emailData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                <label> DOB </label>
                                <input
                                    type="date"
                                    name="dob"
                                    placeholder="Enter DOB"
                                    value={emailData.client}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%" }}
                                />
                            </div>


                            <div className='d-flex flex-column  justify-content-between align-items-start pt-2'>
                                <label> Feedback Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Feedback"
                                    rows="3"
                                    value={emailData.message}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%", height: "80px" }}
                                />
                            </div>

                            <div className='d-flex justify-content-center align-items-center w-100'>
                                <button className="submitBtn" type="submit">Send <IoIosSend /></button>
                            </div>

                        </form>
                    </div>
                </div>

            </div >

        </div >
    )
}

export default UpdateContactInfo