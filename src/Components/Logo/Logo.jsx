import React from 'react';
import './Logo.scss';

import VibrantGreenLogo from '../../Assets/Images/SVG/Logos/VibrantGreenLogo.svg';

const Logo = () => (
    <img 
        className='logo'
        src={VibrantGreenLogo}
        alt='Logo'
        />
);

export default Logo;