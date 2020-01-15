import React from 'react';
import './Logo.scss';

import GreenBruceGreene from '../../Assets/Images/SVG/Logos/GreenBruceGreene.svg';

const Logo = () => (
    <img 
        className='logo'
        src={GreenBruceGreene}
        alt='Logo'
        />
);

export default Logo;