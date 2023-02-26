import React from 'react'
import logo from '../../files/logo.png';
import { Link } from "react-router-dom"

const Logo = () => {

    return (
        <div className='leftNav'>
            <Link to="/"><img className='logo' src={logo} alt='Logo' /></Link>
        </div>  
    )
}

export default Logo