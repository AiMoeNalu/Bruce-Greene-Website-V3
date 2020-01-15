import React, { Fragment } from 'react';
import './Header.scss';

import SocialLinks from '../Social-Links/SocialLinks';

const Header = (props) => {
    return(
    <Fragment>
        <div id='header'>
            <SocialLinks/>
        </div>
    </Fragment>
    )
}

export default Header;