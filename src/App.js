import React from 'react'

import { Footer, Blog, Possibility, OurApproach, WhatCUG, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__gb">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatCUG />
            <OurApproach />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
