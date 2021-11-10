import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
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

            {/* import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; */}
        </div>
    );
};

export default Home;