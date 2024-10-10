import React from 'react'

import graphics01 from '../assets/reviewme-graphics01.png'
import { FaEnvelope } from "react-icons/fa6";
import { BsQrCode } from "react-icons/bs";

function Reviewlinks({ callback }) {
    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white text-center pt-3'>
                <h1 className='textMain'>Review Links</h1>
                <h4 className='textSecondary'>We can share the review links either on your</h4>
                <h4 className='textSecondary'>email or by the on screen QR-code</h4>

            </div>
            <div className='text-white text-center'>
                <img src={graphics01} style={{ height: '190px' }} alt="graphics" />

            </div>
            <div className='d-flex gap-4 pt-2'>
                <button className='reviewBtn btnColorHappy d-flex justify-content-center align-items-center gap-2' onClick={() => callback("email")}> Email <FaEnvelope size={35} />  </button>
                <button className='reviewBtn btnColorHappy d-flex justify-content-center align-items-center gap-2' onClick={() => callback("qrcode")}> QR code <BsQrCode size={30} />  </button>
            </div>
        </div>
    )
}

export default Reviewlinks