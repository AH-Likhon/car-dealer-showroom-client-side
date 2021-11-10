import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AdBanner from '../AdBanner/AdBanner';
import Banner from '../Banner/Banner';
import FeatureCars from '../FeatureCars/FeatureCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureCars></FeatureCars>
            <Reviews></Reviews>
            <AdBanner></AdBanner>
        </div>
    );
};

export default Home;