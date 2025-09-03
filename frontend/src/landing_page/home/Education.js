import React from 'react';

function Education() {
    return(
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media\education.svg' style={{width:'90%'}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-5'>Free and open market education</h1>
                    <p className='mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                  </p>
                  <a href='#' style={{textDecoration:"None"}}>Varsity <i class="fa-solid fa-arrow-right-long p-2"></i></a>
                 <p className='mt-3 mb-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='#' style={{textDecoration:'None'}}>Trading Q&A<i class="fa-solid fa-arrow-right-long p-2"></i></a>

                </div>
            </div>
        </div>
     );
}

export default Education;