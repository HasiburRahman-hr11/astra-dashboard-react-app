import React from 'react';
import HomeBottom from '../../Components/HomeBottom';
import HomeTop from '../../Components/HomeTop';

const Home = () => {
    return (
        <div className='page__wrapper'>
            <HomeTop/>
            <HomeBottom/>
        </div>
    );
};

export default Home;