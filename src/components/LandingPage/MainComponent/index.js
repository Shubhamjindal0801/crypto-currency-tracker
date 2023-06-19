import React from 'react';
import './styles.css';
import Button from '../../Common/Button';
import ButtonTwo from '../../Common/ButtonTwo';
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.12a666ed10b3b442b534.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { RWebShare } from 'react-web-share';

function MainComponent() {

    return (
        <div className='flex-info'>
            <div className='left-component'>
                <motion.h1
                    className='track-crypto-heading'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >Track Crypto</motion.h1>
                <motion.h1
                    className='real-time-heading'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >Real Time.</motion.h1>
                <motion.p
                    className='info-text'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div
                    className='landing-page-btn'
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <Link to="/dashboard"><Button text="Dashboard" /></Link>
                    <RWebShare
                        data={{
                            text: "Crypto Dashboard made using React JS.",
                            url: "https://crypto-tracker-website-three.vercel.app/",
                            title: "CryptoDashboard.",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <ButtonTwo text="Share" outlined={true} />
                    </RWebShare>
                </motion.div>
            </div>
            <div className='right-component'>
                <img src={gradient} className="gradient" />
                <motion.img
                    src={iphone}
                    className="iphone"
                    initial={{ y: -10 }}
                    animate={{ y: 10 }}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror",
                        duration: 2,
                        repeat: Infinity,
                    }}
                />
            </div>
        </div>
    )
}

export default MainComponent
