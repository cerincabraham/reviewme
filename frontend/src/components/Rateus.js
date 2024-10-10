import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";


function Rateus({ callback }) {

    const [hover, setHover] = useState();
    const [rating, setRating] = useState(2);
    return (
        <div className=' blockSection bgBlock d-flex flex-column justify-content-between align-items-center '>
            <div className='text-white text-center pt-3'>
                <h1 className='textMain'>Excellent! Please Rate us 5-stars</h1>
                <h4 className='textSecondary'>...and leave a helpful review.</h4>
            </div>
            <div className='d-flex justify-content-between align-items-center w-50'>

                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <div className='starBlock' onMouseEnter={() => setHover(currentRating)} onMouseLeave={() => setHover(null)} onClick={() => setRating(currentRating)}>
                            <FaStar size={30} color={currentRating <= (hover || rating) ? ('#ffdd00') : ('#2d323a')} />
                        </div>
                    );
                })}
            </div>

            <div className='text-white text-center'>
                <h4>Tap over the stars to rate us</h4>
                <h5>Good rating will activate next button</h5>
            </div>
            <div className='d-flex gap-4'>


                <button className={`reviewBtn btnColorHappy d-flex justify-content-center align-items-center gap-2 ${rating >= 3 ? 'btnActive' : 'btnDeactive'}`}
                    onClick={() => callback("reviewLink")}> ReviewMe    <FaStar size={30} color='#ffdd00' /></button>
            </div>

        </div>
    )
}

export default Rateus