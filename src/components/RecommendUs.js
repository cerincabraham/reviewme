import React from 'react'


import thumbUp from '../assets/thumb-up.png';
import thumbDown from '../assets/thumb-down.png';

function RecommendUs({ callback }) {


    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white'>
                <h2 className='textMain'>Would you recommend us?</h2>
                <h5 className='textSecondary'>We're so excited to hear from you!</h5>
            </div>
            <div className='d-flex gap-4'>
                <button className='reviewBtn btnColorHappy align-items-center' onClick={() => callback(true)}> ReviewMe   <img src={thumbUp} style={{ height: '30px' }} alt="thumb Up" /></button>
                <button className='reviewBtn btnColorUnhappy align-items-center' onClick={() => callback(false)}> ReviewMe   <img src={thumbDown} style={{ height: '30px' }} alt="thumb Down" /></button>
            </div>

        </div>
    )
}

export default RecommendUs