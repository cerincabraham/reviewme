import React from 'react'
import star from '../assets/Star.png';

function Rateus({ callback }) {
    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white text-center pt-3'>
                <h1 className='textMain'>Excellent! Please Rate us 5-stars</h1>
                <h4 className='textSecondary'>...and leave a helpful review.</h4>
            </div>
            <div>
                <div className='starBlock'>

                </div>
            </div>
            <div className='text-white text-center'>
                <h4>Move the slider to rate us</h4>
                <h5>Good rating will activate next button</h5>
            </div>
            <div className='d-flex gap-4'>
                <button className='reviewBtn btnColorHappy align-items-center' onClick={() => callback("reviewLink")}> ReviewMe   <img src={star} style={{ height: '30px' }} alt="star" /></button>
            </div>

        </div>
    )
}

export default Rateus