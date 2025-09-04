import React from 'react';
import { Link } from 'react-router-dom'; 

function Hero() {
    return ( 
        <section className='container p-5 mb-5'>
            <div className='row justify-content-center text-center'>
                <div className='col-lg-8'>
                    <img src='media/homeHero.png' alt='Hero showing investment opportunities' className='mb-5 img-fluid'/>
                    <h1 className='mb-4'>Invest in everything</h1>
                    <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                    <Link to="/Signup">
                        <button className='btn btn-primary fs-5 px-4 py-2 w-100 w-md-50 w-lg-25 mx-auto'>
                            Sign up for free
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;

