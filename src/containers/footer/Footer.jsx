import React from 'react';
import './footer.css';
import logo from '../../assets/logoCUG.png'

const Footer = () => {
    return (
        <div className='cug__footer'>
            <div className='cug__footer-menu'>
                <img src={logo} alt="logo" />

                <div className="cug__footer-links">
                    <p><a href="home">Home</a></p>
                    <p><a href="meettheteam">Meet the Team</a></p>
                    <p><a href="ourapproach">Our Approach</a></p>
                    <p><a href="casestudies">Case Studies</a></p>
                    <p><a href="blog">Blog</a></p>
                </div>

                <div className='cug__footer-icons'>

                </div>

            </div>

            <div className='cug__footer-divider'>
                <h4>Denver</h4>
                <h4>Nashville</h4>
                <h4>Boston</h4>
            </div>

            <div className='cug__footer-legal'>
                <p>2022 TheClickUpGuys. All right reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Cookies Settings</p>
            </div>

        </div>
    )
}

export default Footer
