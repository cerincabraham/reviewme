import React, { useState, useEffect } from 'react';

import "../App.css"
import NavLink from './Navbar';
import emailjs from '@emailjs/browser';
import Feedback from './Feedback';
import RecommendUs from './RecommendUs';
import Rateus from './Rateus';


function Reviewme() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [googleLink, setGoogleLInk] = useState('Please find the links for Google');
    const [facebookLink, setFacebookLink] = useState('Please find the link for Facebook');
    const [blockCard, setBlockCard] = useState('-100');
    const [recommend, setRecommend] = useState('none');



    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_rkliftr';
        const templateId = 'template_j5123dj';
        const publicKey = 'uaevzCuvbpVxUlj4Y';

        const templateParams = {
            to_name: firstName + ' ' + lastName,
            to_email: email,
            from_name: "ReviewMe KPT",
            reply_to: "info@karakafamilyhealth.com",
            googleLink: googleLink,
            facebookLink: facebookLink,

        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setEmail('');
                setFirstName('');
                setLastName('');
            })
            .catch((error) => {
                console.error('Error sending email', error);
            });

    }
    const recommendCallback = (value) => {
        console.log(`You clicked on ${value}`);
        if (value === "like") {
            setBlockCard('-200')
        } else if (value === 'disLike') {
            setBlockCard('0')
        } else if (value === 'reviewLink') {
            setBlockCard('0')
        }
        setRecommend(value);
    }
    return (
        <div className='d-flex flex-column align-items-center bgSecondary ' style={{ height: "100vh" }}>
            <NavLink />
            <div className=' d-flex flex-column justify-content-start align-items-center w-100 bgPrimary rounded-bottom-5 dropShadow' style={{ height: "80vh" }}>
                <div className=' d-flex flex-column justify-content-start align-items-center border border-danger w-50 ' style={{ height: "90%" }}>
                    <div className=' d-none flex-column justify-content-evenly align-items-center border border-success' style={{ height: "20%" }}>
                        <div className=''>
                            ReviewMe
                        </div>
                        <form onSubmit={handleSubmit} className='emailForm'>
                            <input
                                type='text'
                                placeholder='Your First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                type='text'
                                placeholder='Your Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <input
                                type='email'
                                placeholder='Your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type='submit'>Send Email</button>

                        </form>
                    </div>
                    <div className='w-100 ps-5 border border-success mt-4 mb-4' style={{ height: "15%" }}>
                        <h1 >Share What's on Your Mind</h1>
                        <h5 className='textSecondary'>We Value Your Voice!      {recommend}    {blockCard}</h5>


                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center w-100 border border-success  position-relative overflow-hidden' style={{ height: "85%" }}>
                        <div className={`blockConatiner${blockCard === 2 ? '' : ''}`} style={{ left: `${blockCard}%` }}>
                            <Feedback />
                            <RecommendUs callback={recommendCallback} />
                            <Rateus callback={recommendCallback} />
                        </div>
                    </div>
                </div >
            </div>


        </div >
    )
}

export default Reviewme