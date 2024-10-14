import React from 'react'

import { useNavigate } from 'react-router-dom';


import '../App.css'
import groupLogo from '../assets/KPT-Logo---01.png'
import logoWhite from '../assets/Karakafamily-logo---01.png'
import WifiStatus from './WifiStatus';


function Home() {

    const navigate = useNavigate();
    return (

        <div className='background-wrapper h-100  position-relative '>
            <div className='wifiDiv'>
                <WifiStatus />
            </div>
            <div className="d-flex flex-column text-center text-white  justify-content-between" style={{ height: "250px" }} >

                <div>
                    <img src={groupLogo} style={{ height: '35px' }} alt="GroupLogo" />
                </div>
                <div >
                    <img src={logoWhite} style={{ height: '45px' }} alt="GroupLogo" />
                </div>
                <div className="fw-light h3 text-sub" >
                    We'd Love to Hear Your Thoughts and Feedback!
                </div>

                <div className='d-flex justify-content-center gap-5 mt-5'>
                    <button className='button' style={{ height: "80px" }} onClick={() => navigate('/reviewme')}>Write Your Feedback</button>
                    <button className='button' onClick={() => navigate('/updatecontact')}>Update Your Changes</button>
                </div>
            </div>


        </div >

    )
}

export default Home