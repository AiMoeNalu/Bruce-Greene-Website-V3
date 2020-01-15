import React, { Fragment } from 'react';
import './SocialLinks.scss';

import SOCIAL_ACCOUNT from '../../Assets/SocialMedia/Accounts';

const SocialLinks = () => {

    return (
        <Fragment>
            {
                SOCIAL_ACCOUNT.icons.map(icon => <img className='social-icons' src={icon}/>)
            }
        </Fragment>
    );
};

SocialLinks.propTypes = {

};

export default SocialLinks;
