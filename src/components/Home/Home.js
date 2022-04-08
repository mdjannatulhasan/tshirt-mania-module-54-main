import React, { useState } from 'react';
import useTshirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import './Home.css';


const Home = () => {

    const [tShirts, setTShirts] = useTshirts();

    

    return (
        <div>

            <div className='home-container'>
                <div className="tshirt-container">
                    <h3>{tShirts.length}</h3>
                </div>
                <div className="cart-container">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;