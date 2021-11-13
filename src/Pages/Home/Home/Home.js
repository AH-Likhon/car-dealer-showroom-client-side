import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import AdBanner from '../AdBanner/AdBanner';
import Banner from '../Banner/Banner';
import FeatureCars from '../FeatureCars/FeatureCars';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <FeatureCars></FeatureCars>
            <Reviews></Reviews>
            <AdBanner></AdBanner>
            <Footer></Footer>
        </div>
    );
};

export default Home;