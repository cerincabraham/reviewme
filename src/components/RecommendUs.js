import React from 'react'


import thumbUp from '../assets/thumb-up.png';
import thumbDown from '../assets/thumb-down.png';
import startGold from '../assets/star-gold.png';

function RecommendUs({ callback }) {


    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-around align-items-center '>
            <div className='text-white pt-3 text-center '>
                <h1 className='textMain'>Would you recommend us?</h1>
                <h4 className='textSecondary'>We're so excited to hear from you!</h4>
            </div>
            <div className='d-flex justify-content-around align-items-center w-25'>
                <img src={startGold} style={{ height: '30px' }} alt="start" />
                <img src={startGold} style={{ height: '30px' }} alt="start" />
                <img src={startGold} style={{ height: '30px' }} alt="start" />
                <img src={startGold} style={{ height: '30px' }} alt="start" />
                <img src={startGold} style={{ height: '30px' }} alt="start" />
            </div>
            <div className='text-white text-center'>
                <h1>REVIEW US ON</h1>
                <h1>GOOGLE / FACEBOOK</h1>
                <h4>Your Opinion helps us reach more people!</h4>
                <h5>Rate us only if Impressed with our service!</h5>
            </div>
            <div className='d-flex gap-4'>
                <button className='reviewBtn btnColorHappy align-items-center' onClick={() => callback("like")}> Happy   <img src={thumbUp} style={{ height: '30px' }} alt="thumb Up" /></button>
                <button className='reviewBtn btnColorUnhappy align-items-center' onClick={() => callback("disLike")}> Unhappy   <img src={thumbDown} style={{ height: '30px' }} alt="thumb Down" /></button>
            </div>

        </div>
    )
}

export default RecommendUs