import React from 'react'


import thumbUp from '../assets/thumb-up.png';
import thumbDown from '../assets/thumb-down.png';
import startGold from '../assets/star-gold.png';
import graphics01 from '../assets/reviewme-graphics01.png'

function RecommendUs({ callback }) {


    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-around align-items-center '>

            <div className='text-white pt-0 text-center '>
                <h1 className='textMain'>Would you recommend us?</h1>
                <h4 >Your Opinion helps us reach more people!</h4>
                <h5 >Rate us only if Impressed with our service!</h5>

            </div>
            <div className='text-white text-center'>
                <img src={graphics01} style={{ height: '190px' }} alt="graphics" />

            </div>
            <div className='d-flex justify-content-around align-items-center w-25'>
                {[...Array(5)].map(star => {
                    return (
                        <img src={startGold} style={{ height: '20px' }} alt="start" />
                    );
                })}


            </div>
            <div>
                <h6 className='textSecondary pt-1'>We're so excited to hear from you!</h6>
            </div>
            <div className='d-flex gap-4 pt-2'>
                <button className='reviewBtn btnColorHappy align-items-center' onClick={() => callback("like")}> Happy   <img src={thumbUp} style={{ height: '30px' }} alt="thumb Up" /></button>
                <button className='reviewBtn btnColorUnhappy align-items-center' onClick={() => callback("disLike")}> Unhappy   <img src={thumbDown} style={{ height: '30px' }} alt="thumb Down" /></button>
            </div>

        </div>
    )
}

export default RecommendUs