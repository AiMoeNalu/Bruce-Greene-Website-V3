import React, { Fragment } from 'react';
import {
    NavLink
} from 'react-router-dom';
import './Header.scss';

import MENU_OPTIONS from '../../Assets/Data/MenuOptions/MenuOptions';
import SOCIAL_ACCOUNT from '../../Assets/SocialMedia/Accounts';

import HorizontalList from '../Horizontal-List/HorizontalList';
import Logo from '../Logo/Logo';

const Header = (props) => {
    return(
    <Fragment>
        <div id='header'>
            <div className='left'>
                <HorizontalList type='icon' array={SOCIAL_ACCOUNT} grow/>
            </div>
            <div className='center'>
                <NavLink exact to='/'>
                    <Logo/>
                </NavLink>
            </div>
            <div className='right links'>
                <HorizontalList type='options' array={MENU_OPTIONS} grow/>
            </div>
        </div>
    </Fragment>
    )
}

export default Header;