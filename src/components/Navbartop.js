

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Navbartop() {
    return (
        <div> <div className='navbar-container'>
            <Link to={'/'}>Home</Link>
            <Link to={'reviewme'}>ReviewMe</Link>
            <Link>Update Contact Information</Link>
        </div></div>
    )
}

export default Navbartop




