import React, { useState, useEffect } from 'react';
import NavLink from './Navbar';
import '../App.css';

function UpdateContactInfo() {


    return (
        <div className='d-flex flex-column align-items-center bg-praimary'>
            <NavLink />
            <div className=' d-flex flex-column justify-content-start align-items-center border border-danger w-50' style={{ height: "90vh" }}>
                <div className=' d-flex flex-column justify-content-evenly align-items-center border border-success' style={{ height: "20%" }}>
                    <div className=''>
                        Update Contact Info
                    </div>

                </div>

            </div >

        </div >
    )
}

export default UpdateContactInfo