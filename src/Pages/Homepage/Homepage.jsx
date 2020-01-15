import React, {Component, Fragment} from 'react';
import './Homepage.scss';

import TwitchEmbed from '../../Components/Twitch-Embed/TwitchEmbed';

export default class Homepage extends Component {
    render(){
        return(
        <Fragment>
            <div id='homepage'>
                <div className='row1'>
                    <TwitchEmbed id='twitch-embed'/>
                    <div id='donate-form'>Donate Form</div>
                </div>
                <div className='row2'>
                    Row 2
                </div>
                <div className='row3'>
                    Row 3
                </div>
            </div>
        </Fragment>
        )}
}