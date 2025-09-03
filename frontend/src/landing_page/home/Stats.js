import React from 'react';
function Stats () {
    return (
         <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h2>Customer-first always</h2>
                    <p className='mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h2>No spam or gimmicks</h2>
                    <p className='mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.
                    <a href="#" style={{textDecoration:"none"}}>Our philosophies</a>
                    </p>
                    <h2>The Zerodha universe</h2>
                    <p className='mb-4'>Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specifcs to your needs.</p>

                    <h2>Do better with money</h2>
                    <p className='mb-4'>With initiatives like Nudge and Kill Switch,we dont't just facilitate transcations,but actively help you do better with your money.</p>
                </div>
                <div className='col-6'>
                    <img src='media/ecosystem.png' style={{width:'90%'}}/>

                <div className='row'>
                    <div className='col-6'>
                        <a href='#' style={{textDecoration:"none"}}>Explore ur products.<i class="fa-solid fa-arrow-right-long p-2"></i></a>
                    </div>
                    <div className='col-6'>
                        <a href='#' style={{textDecoration:"none"}}>Try Kite demo.<i class="fa-solid fa-arrow-right-long p-2"></i></a>
                    </div>
                </div>
                </div>
            </div>
         </div>
    );
}
export default Stats ;