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
                    Donate
                </NavLink>
                <NavLink exact to='/shop'>
                    Shop
                </NavLink>
                <NavLink exact to='/login'>
                    Login
                </NavLink>
            </div>
        </div>
    </Fragment>
    )
}

export default Header;