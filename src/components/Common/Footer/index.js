import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
    function backToTop() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <div className='footer'>
            <h2 className='footer-logo' onClick={() => backToTop()}>CryptoTracker<span>.</span></h2>
            <div className='footer-links'>
                <Link to={'https://facebook.com'}>
                    <FacebookIcon className='footer-link' />
                </Link>
                <Link to={'https://instagram.com'}>
                    <InstagramIcon className='footer-link' />
                </Link>
                <Link to={'https://twitter.com'}>
                    <TwitterIcon className='footer-link' />
                </Link>
                <Link to={'mailto:shubhamjindal61999@gmail.com'}>
                    <EmailIcon className='footer-link' />
                </Link>
            </div>
        </div>
    )
}

export default Footer
