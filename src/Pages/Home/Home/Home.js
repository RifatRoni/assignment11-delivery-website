import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedServices from '../FeaturedServices/FeaturedServices';
import LatestNews from '../LatestNews/LatestNews';
import WhySpecial from '../WhySpecial/WhySpecial';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <WhySpecial></WhySpecial>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;