import React from 'react'
import './whatCUG.css';
import oliver from '../../assets/OliverImage.png'
import andres from '../../assets/AndresImage.png'

const WhatCUG = () => {
    return (
        <div className='cug__about section__padding' id="meettheteam">
            <div className='cug__about-title'>
                <h1>Meet the ClickUp Guys</h1>
                <p>Discover how our obession with optimizing systems can transform your Business. Schedule a demo today.</p>
            </div>

            <div className='cug__about-profiles'>
                <div className='cug__about-profiles_oliver'>
                    <img src={oliver} alt="oliver" />
                    <h3>Oliver Cenedella</h3>
                    <p className='cug__profiles-vanderiblt'>Vanderbilt University</p>
                    <p>Political Science, Piano</p>
                    <p>Oliver forms enduring customer relationships while building bold and creative strategies that transform companies. With ClickUp implementation, he continues working with a variety of organizations, helping them rethink the way they do work. </p>
                </div>
                    <img src={andres} alt="andres" />
                    <h3>Andrés Campos</h3>
                    <p className='cug__profiles-vanderiblt'>Vanderbilt University</p>
                    <p>English, Computer Science, Business</p>
                    <p>Andrés has spent years implementing productivity software into companies of all sizes and knew he found the perfect solution with ClickUp and now focuses his time on delivering its game-changing benefits to companies around the world.</p>
                <div className='cug__about-profiles_andres'>
                    
                </div>
            </div>

            <div className='cug__about-button'>
                    <button type='button'>Schedule a Demo</button>
            </div>


        </div>
    )
}

export default WhatCUG
