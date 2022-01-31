import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import PhoneDiagnosisBanner from '../PhoneDiagnosisBanner/PhoneDiagnosisBanner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <PhoneDiagnosisBanner></PhoneDiagnosisBanner>
        </div>
    );
};

export default Home;