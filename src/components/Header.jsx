import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Logo from '../assets/logo.svg'

const Header = () => {

    return (
        <header>
            <Link to='/'>
                <img src={Logo} alt="Logo" className='logo' />
            </Link>
            <Nav />
        </header>
    )
}

export default Header
