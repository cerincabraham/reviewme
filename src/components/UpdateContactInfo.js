import React, { useState, useEffect } from 'react';
import NavLink from './Navbar';
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { IoIosSend } from "react-icons/io";

function UpdateContactInfo() {
    const [formData, setformData] = useState({
        to: '',
        name: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
        console.log("Forem Data", formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await axios.post('http://localhost:5000/send-update', { ...formData });
            alert('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email');
        }
        // navigate('/')
    };

    return (
        <div className='d-flex flex-column align-items-center bg-praimary'>
            <NavLink />
            <div className=' d-flex flex-column justify-content-start align-items-center  pt-3 w-50' style={{ height: "96vh" }}>
                <div className=' blockSection  bgBlock d-flex flex-column justify-content-start align-items-center' style={{ height: "90%" }}>
                    <div className='text-white text-center'>
                        <h2 className='textMain'>Personal & Emergency Contact Update</h2>
                        <h5 className='textSecondary'>Please provide any updated personal or emergency contact details.</h5>
                    </div>
                    <div className='mt-0 d-flex flex-column justify-content-between align-items-center' style={{ width: "75%" }}>
                        <form onSubmit={handleSubmit} className=' textMain w-100 mt-2 d-flex flex-column justify-content-between align-items-left gap-1' >
                            <div className=' pt-3 pb-0'>
                                <h4 className='textMain'>Personal Details</h4>
                            </div>
                            <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                <label> NHI</label>
                                <input
                                    type="text"
                                    name="nhi"
                                    placeholder="Enter Your NHI Number"
                                    value={formData.nhi}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%" }}
                                />
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> First Name</label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter First Name"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                                <div className='d-flex flex-column  justify-content-between align-items-start ' style={{ width: "48%" }}>
                                    <label> SurName</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        placeholder="Enter SurName"
                                        value={formData.surname}
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
                                        type="tel"
                                        name="mobile"
                                        pattern="[0-9]{10}"
                                        placeholder="Enter Mobile Number"
                                        value={formData.mobile}
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                <label> DOB </label>
                                <input
                                    type="text"
                                    name="dob"
                                    placeholder="Enter Your Date Of Birth"
                                    value={formData.dob}
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => e.target.type = 'text'}
                                    onChange={handleChange}
                                    required
                                    style={{ width: "100%" }}
                                />
                            </div>

                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label>Address</label>
                                    <input
                                        type="text"
                                        name="street"
                                        placeholder="Enter Street Address"
                                        value={formData.street}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> Suburb</label>
                                    <input
                                        type="text"
                                        name="suburb"
                                        placeholder="Enter Suburb"
                                        value={formData.suburb}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label>City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Enter City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> Post</label>
                                    <input
                                        type="text"
                                        name="post"
                                        placeholder="Enter Post"
                                        pattern="[0-9]{4}"
                                        value={formData.post}
                                        onChange={handleChange}
                                        required
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='divline pt-3 pb-2'>
                                <h4 className='textMain'>Emergency Contact</h4>
                                <h6>Next of Kin Contact Info</h6>
                            </div>

                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        name="kinname"
                                        placeholder="Enter Full Name"
                                        value={formData.kinname}
                                        onChange={handleChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> Relationship</label>
                                    <input
                                        type="text"
                                        name="relation"
                                        placeholder="Enter Relationship"
                                        value={formData.relation}
                                        onChange={handleChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center w-100'>
                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label>Mobile</label>
                                    <input
                                        type="tel"
                                        name="kinmobile"
                                        pattern="[0-9]{10}"
                                        placeholder="Enter Mobile Number"
                                        value={formData.kinmobile}
                                        onChange={handleChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className='d-flex flex-column justify-content-between align-items-start' style={{ width: "48%" }}>
                                    <label> Phone</label>
                                    <input
                                        type="tel"
                                        name="kinphone"
                                        placeholder="Enter Home Phone Number"
                                        value={formData.kinphone}
                                        onChange={handleChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>
                            <div className='divline pt-2'>
                            </div>
                            <div className='d-flex justify-content-center align-items-center w-100'>
                                <button className="submitBtn" type="submit">Submit <IoIosSend /></button>
                            </div>

                        </form>
                    </div>
                </div>

            </div >

        </div >
    )
}

export default UpdateContactInfo