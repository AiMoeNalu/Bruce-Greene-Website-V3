import Twitch from '../Images/SVG/Social-Icons/Twitch.svg';
import Twitter from '../Images/SVG/Social-Icons/Twitter.svg';
import Youtube from '../Images/SVG/Social-Icons/Youtube.svg';
import Instagram from '../Images/SVG/Social-Icons/Instagram.svg';

const SOCIAL_ACCOUNT = [
        {
            platform: "Twitch", 
            link: "https://www.twitch.tv/brucegreene", 
            icon: Twitch,
            key: 0
        },
        {
            platform: "Twitter", 
            link: "https://twitter.com/brucegreene?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", 
            icon: Twitter,
            key: 1
        },
        {
            platform: "Youtube", 
            link: "https://www.youtube.com/channel/UCLyGS26tPDRfgxRL_0ilwKQ", 
            icon: Youtube,
            key: 2
        },
        {
           platform: "Instagram", 
           link: "https://www.instagram.com/brucegreene/?hl=en", 
           icon: Instagram,
           key: 3
        }
];

export default SOCIAL_ACCOUNT;