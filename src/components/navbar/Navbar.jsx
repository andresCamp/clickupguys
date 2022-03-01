import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import hamburger from '../../assets/NavBarMenuIcon.png'
import logo from '../../assets/ClickUpGuysLogo.png'

const Menu = () => (
    <>
    <p><a href="home">Home</a></p>
    <p><a href="meettheteam">Meet The Team</a></p>
    <p><a href="ourapproach">Our Approach</a></p>
    <p><a href="casestudies">Case Studies</a></p>
    <p><a href="blog">Blog</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="cug__navbar">
            

            {/*
            <div className="cug__navbar-hero">
                <div className="cug__navbar-hamburgermenu">
                        <img src={hamburger} alt="hamburgermenu" />
                </div>

                <div className="cug__navbar-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="cug__navbar-connect">
                    <button type="button">Connect</button>
                </div>
            </div>

            */}

            <div className="cug__navbar-scroll">

                <div className="cug__navbar-scroll_logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="cug__navbar-scroll_links">
                    <p><a href="home">Home</a></p>
                    <p><a href="meettheteam">Meet the Team</a></p>
                    <p><a href="ourapproach">Our Approach</a></p>
                    <p><a href="casestudies">Case Studies</a></p>
                    <p><a href="blog">Blog</a></p>
                </div>

                <div className="cug__navbar-scroll_connect">
                    <button type="button">Connect</button>
                </div>

            </div>


{/*
            <div className="cug__navbar-scroll">
                
                <div className="cug__navbar-spaceholder">
                    text
                </div>

                <div className="cug__navbar-scroll_links">
                    <p><a href="home">Home</a></p>
                    <p><a href="meettheteam">Meet the Team</a></p>
                    <p><a href="ourapproach">Our Approach</a></p>
                </div>
                
                <div className="cug__navbar-scroll_logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="cug__navbar-scroll_links1">
                    <p><a href="casestudies">Case Studies</a></p>
                    <p><a href="blog">Blog</a></p>
                </div>

                <div className="cug__navbar-scroll_connect">
                    <button type="button">Connect</button>
                </div>

            </div>


*/}


            <div className="cug__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="cug__navbar-menu_container scale-up-center">
                        <div className="cug__navbar-menu_container-links">
                            <Menu />
                            <div className="cug__navbar-menu_container-links-connect">
                                <button type="button">Connect</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar