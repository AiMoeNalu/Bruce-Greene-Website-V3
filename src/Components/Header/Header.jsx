import React, { Fragment } from 'react';
import {
    NavLink
} from 'react-router-dom';
import './Header.scss';

import SocialLinks from '../Social-Links/SocialLinks';
import Logo from '../Logo/Logo';

const Header = (props) => {
    return(
    <Fragment>
        <div id='header'>
            <div className='left'>
                <SocialLinks/>
            </div>
            <div className='center'>
                <NavLink exact to='/'>
                    <Logo/>
                </NavLink>
            </div>
            <div className='right links'>
                <NavLink exact to='/donate'>
                    <span className='option'>Donate</span>
                </NavLink>
                <NavLink exact to='/shop'>
                    <span className='option'>Shop</span>
                </NavLink>
                <NavLink exact to='/login'>
                    <span className='option'>Login</span>
                </NavLink>
            </div>
        </div>
    </Fragment>
    )
}

export default Header;