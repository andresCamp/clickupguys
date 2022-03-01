import React from 'react';
import './header.css';
import hero from '../../assets/CUG Hero Image.png'
import construction from '../../assets/underconstruction.png'


const Header = () => {
    return (
        
        <div className='cug__header' id= "home">
            
            <div className='construction'>
                <img src={construction} alt="construciton" />
            </div>

            <div>
                <h1>Contact:</h1>
                <h1>oliver@theclickupguys.com</h1>
                <h1>andres@theclickupguys.com</h1>
            </div>


            <div className='cug__header-content'>
                <h1 className='title'>Discover a Better Way of Doing Business.</h1>
                <p>The ClickUp Guys design and build systems to streamline and automate your work.</p>
                
                <div className='cug__header-content_button'>
                    <button className="cug__header-content_button-process" type='button'>Our Process</button>
                    <button type='button'>Schedule a Demo</button>
                </div>

            </div>

            <div className='cug__header-image'>
                <img src={hero} alt="hero" />
            </div>


            
        </div>
    )
}

export default Header
