import React from 'react'
import NavLink from './Navbar';

function Reviewme() {
    return (
        <div className='d-flex flex-column align-items-center bg-praimary'>
            <NavLink />
            <div className=' d-flex flex-column justify-content-start align-items-center border border-danger w-50' style={{ height: "90vh" }}>
                <div className=' d-flex flex-column justify-content-evenly align-items-center border border-success' style={{ height: "20%" }}>
                    <div className=''>
                        ReviewMe
                    </div>

                </div>

            </div >

        </div >
    )
}

export default Reviewme