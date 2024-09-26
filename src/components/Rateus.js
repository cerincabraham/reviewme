import React from 'react'
import star from '../assets/Star.png';

function Rateus(callback) {
    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white'>
                <h2 className='textMain'>Excellent! Please Rate us 5-stars</h2>
                <h5 className='textSecondary'>...and leave a helpful review.</h5>
            </div>
            <div className='d-flex gap-4'>
                <button className='reviewBtn btnColorHappy align-items-center' onClick={() => callback("yes")}> ReviewMe   <img src={star} style={{ height: '30px' }} alt="star" /></button>
            </div>

        </div>
    )
}

export default Rateus