import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import Awards from'./Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../Openaccount';
import Footer from '../Footer';

function HomePage() {
    return (
        <>
        
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <Openaccount />
        

        </>
      );
}

export default HomePage;