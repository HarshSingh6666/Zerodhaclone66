import React from 'react';
function Pricing() {
    return ( 
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className='col-6'>
                <div className='row'>
                    <div className='col-4'>
                    <img src='media\pricing0.svg'/>
                    <p>Free accountopening</p>


                    </div>
                    <div className='col-4'>
                        <img src='media\pricing0.svg'/>
                        <p className='fs-15'>Free equity deliveryand direct mutual funds</p>

                    </div>
                    <div className='col-4'>
                    <img src='media\intradayTrades.svg'/>
                    <p>Intraday and F&O</p>

                    </div>

                </div>

                </div>
            </div>
        </div>
     );
}

export default Pricing;