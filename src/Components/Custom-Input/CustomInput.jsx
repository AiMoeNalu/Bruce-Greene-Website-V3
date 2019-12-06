import React from 'react';

import './CustomInput.scss';

const CustomInput = ({ children, ...otherProps }) => {
    return(
        <input
        {...otherProps}
        >
        {children}
        </input>
    )
}

export default CustomInput;