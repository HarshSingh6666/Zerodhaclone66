import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import ChargesPage from './ChargesAccount';
import ChargesExplain from './ChargesExplain';
function PricingPage() {
    return ( 
        <>
        
        <Hero />
        <Brokerage />
        <ChargesExplain/>
        <ChargesPage/>
        

        </>
     );
}

export default PricingPage;