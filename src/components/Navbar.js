import React from 'react'
import {GiCoins} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        // Take to the home page by link to '/'
        <Link to='/'> 
            <div className='navbar'>
                <GiCoins className='icon'/>
                <h1 className='gray'> Crypto <span className='my-color'> Market </span></h1>
            </div>
        </Link>
    );
};

export default Navbar;
