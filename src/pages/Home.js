import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subTitle="Deluxue Rooms Starting At $299">
                    <Link className="btn-primary" to="/rooms">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

export default Home;
