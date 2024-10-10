import React, { useState } from 'react';

import "../App.css"
import NavLink from './Navbar';
import emailjs from '@emailjs/browser';
import Feedback from './Feedback';
import RecommendUs from './RecommendUs';
import Rateus from './Rateus';
import Reviewlinks from './Reviewlinks'
import Reviewemail from './Reviewemail';
import ReviewQrcode from './ReviewQrcode';



function Reviewme() {

    const [blockCard, setBlockCard] = useState('-100');
    const [recommend, setRecommend] = useState('none');




    const recommendCallback = (value) => {
        console.log(`You clicked on ${value}`);
        if (value === "like") {
            setBlockCard('-200')
        } else if (value === 'disLike') {
            setBlockCard('0')
        } else if (value === 'reviewLink') {
            setBlockCard('-300')
        } else if (value === 'email') {
            setBlockCard('-400')
        } else if (value === 'qrcode') {
            setBlockCard('-500')
        }

        setRecommend(value);
    }
    return (
        <div className='d-flex flex-column align-items-center bgSecondary ' style={{ height: "100vh" }}>
            <NavLink />
            <div className=' d-flex flex-column justify-content-start align-items-center w-100 bgPrimary rounded-bottom-5 dropShadow' style={{ height: "80vh" }}>
                <div className=' d-flex flex-column justify-content-start align-items-center w-50 ' style={{ height: "90%" }}>

                    <div className='w-100 ps-5 mt-4 mb-4' style={{ height: "15%" }}>
                        <h1 >Share What's on Your Mind</h1>
                        <h5 className='textSecondary'>We Value Your Voice! </h5>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center w-100  position-relative overflow-hidden' style={{ height: "85%" }}>
                        <div className={`blockConatiner${blockCard === 2 ? '' : ''}`} style={{ left: `${blockCard}%` }}>
                            <Feedback />
                            <RecommendUs callback={recommendCallback} />
                            <Rateus callback={recommendCallback} />
                            <Reviewlinks callback={recommendCallback} />
                            <Reviewemail callback={recommendCallback} />
                            <ReviewQrcode callback={recommendCallback} />
                        </div>
                    </div>
                </div >
            </div>


        </div >
    )
}

export default Reviewme