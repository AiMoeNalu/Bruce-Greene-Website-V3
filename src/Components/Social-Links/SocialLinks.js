import React, { Fragment } from 'react';
import './SocialLinks.scss';

import SOCIAL_ACCOUNT from '../../Assets/SocialMedia/Accounts';

const SocialLinks = () => {

    return (
        <Fragment>
            <ul className='horizontal-list'>
                {
                    SOCIAL_ACCOUNT.map(({platform, link, icon, key}) => 
                    <li className='grow'>
                        <img 
                            className='social-icons clickable'
                            src={icon} 
                            alt={platform} 
                            key={key}
                            onClick={() => window.open(`${link}`, "_blank")}
                        />
                    </li>
                )}
            </ul>
        </Fragment>
    );
};

SocialLinks.propTypes = {

};

export default SocialLinks;
