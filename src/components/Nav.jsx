import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const context = useContext(MyContext)
    const { cart, login } = context
    const cartLength = cart.length
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavLink to='/products' className='custom-btn btn-3' >
                            <li className="nav-item">
                                <span>Products</span>
                            </li>
                        </NavLink>
                        <NavLink to='/login' className='custom-btn btn-3' >
                            <li className="nav-item">
                                <span>{login}</span>
                            </li>
                        </NavLink>
                        <NavLink to='/about' className='custom-btn btn-3' >
                            <li className="nav-item">
                                <span>About</span>
                            </li>
                        </NavLink>
                        <NavLink to='/contact' className='custom-btn btn-3' >
                            <li className="nav-item">
                                <span>Contact</span>
                            </li>
                        </NavLink>
                        <NavLink to='/cart' className='custom-btn btn-3' >
                            <li className="nav-item">
                                <span>Cart <i className='cartNumber'>{cartLength}</i> </span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;