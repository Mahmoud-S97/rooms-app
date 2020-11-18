import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomContainer';

const Rooms = () => {

    return (
        <div>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">Back Home</Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </div>
    )
}

export default Rooms;
