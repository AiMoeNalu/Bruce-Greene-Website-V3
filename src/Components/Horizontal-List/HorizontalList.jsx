import React, { Fragment } from 'react';
import './HorizontalList.scss';

import { NavLink } from 'react-router-dom';

/*
* @param array : The data to be mapped to the horizontal list
* @param type : If type === 'icon', data to be displayed in <img/>, else <span/>
* @param grow : If grow === true, option will grow on hover
*/

const HorizontalList = ({array, type, grow=true, ...otherProps}) =>{
    return(
        <Fragment>
            <ul className='horizontal-list'>
                {
                    array.map( item => 
                        <li className={grow === true ? 'grow' : null} key={item.key}>
                            {
                                type === 'icon' ? 
                                    <img 
                                        {...otherProps}
                                        src={item.icon} 
                                        alt={item.platform}
                                        onClick={() => window.open(`${item.link}`, "_blank")}
                                    /> 
                                    :
                                    <NavLink exact to={`/${item.option.toLowerCase()}`}>
                                        <span {...otherProps}>{item.option}</span>
                                    </NavLink>
                            }
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
};

export default HorizontalList;