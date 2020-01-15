import React, { Fragment } from 'react';
import './SocialLinks.scss';

import SOCIAL_ACCOUNT from '../../Assets/SocialMedia/Accounts';

const SocialLinks = () => {

    return (
        <Fragment>
            {
                SOCIAL_ACCOUNT.map(({platform, link, icon, key}) => 
                <img 
                    className='social-icons clickable'
                    src={icon} 
                    alt={platform} 
                    key={key}
                    onClick={() => window.open(`${link}`, "_blank")}
                    />
            )}
        </Fragment>
    );
};

SocialLinks.propTypes = {

};

export default SocialLinks;
