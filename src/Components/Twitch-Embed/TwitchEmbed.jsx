import React from 'react';
import './TwitchEmbed.scss';

import ReactPlayer from 'react-player'

const TwitchEmbed = () =>(
    <div className='player-wrapper'>
        <ReactPlayer
            playing={true}
            className='react-player'
            url='https://www.twitch.tv/brucegreene'
            width='100%'
            height='100%'
            volume={null}
            muted
        />
    </div>
);

export default TwitchEmbed;