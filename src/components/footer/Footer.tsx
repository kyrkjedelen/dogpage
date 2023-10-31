import React from 'react';
import './Footer.css'

const Footer: React.FC = () => {
    return(
        <footer id = 'footer'>
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"></link>
            <div id="soMe">
                <a id="reddit" href='https://old.reddit.com/r/Eyebleach/' target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-reddit bx-lg'></i>
                </a>
                <a id="linkedin" href='https://justthetip.fm/wp-content/uploads/season01/episode13/shownote-devitoass.jpg' target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-linkedin-square bx-lg'></i>
                </a>
                <a id="github" href='https://github.com/orgs/vektorprogrammet/teams/vektorweb' target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-github bx-lg'></i>
                </a>
                <a id="instagram" href='https://www.instagram.com/doge.jpg_/' target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-instagram bx-lg'></i>
                </a>
            </div>

        </footer>
    )
}

export default Footer;