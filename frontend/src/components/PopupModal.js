import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import emailOpen from '../assets/email-open.png';

function PopupModal(props) {
    const [popupmessage, setPopupmessage] = useState();
    const navigate = useNavigate();
    return (
        <div className='popupModuleWraper'>
            <div className='popupModule '>
                <div className=' w-100 d-flex flex-column justify-content-center align-items-center ' style={{ height: "40%" }}>
                    <img src={emailOpen} style={{ height: '130px' }} alt="graphics" />

                </div>
                <div className='w-100 d-flex flex-column justify-content-start align-items-center pt-4 textPrimary' style={{ height: "60%" }}>
                    <h2 >Thank You</h2>
                    <h5 >{props.messsage1}</h5>
                    <h5 >{props.messsage2}</h5>
                    <div className='d-flex justify-content-center align-items-center w-100 pt-4'>
                        <button className='button ' type="submit" onClick={() => navigate('/')}>Back to Home Page</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PopupModal
