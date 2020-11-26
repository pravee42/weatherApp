import React from 'react'
import './Footer.css'
import insta from './Assests/insta.png'
import github from './Assests/github.png'
import youtube from './Assests/youtube.png'

export default function Footer() {
    return (
        <>
            <div className="footer__container">
                <p>Follow Us</p>
                <div className="footer__icons">
                    <a href="https://www.instagram.com/praveenkumar_abipravi/"> <img src={insta} alt="instalogo" /></a>
                    <a href="https://github.com/pravee42"> <img src={github} alt="githublogo" /></a>
                    <a href="https://www.youtube.com/channel/UCTMAfI1rkf94YQGNmZwFT7Q"> <img src={youtube} alt="youtubelogo" /></a>
                </div>
            </div>
        </>
    )
}
