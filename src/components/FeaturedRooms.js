import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Loading from './Spinner';
import Room from './Room';


const FeaturedRooms = () => {

const roomContext = useContext(RoomContext);
const  { loading, featuredRooms } = roomContext;

    let fRooms = featuredRooms.map(room => {
        return <Room key={room.id} roomData={room} />
    });
    
    return ( 
        <div className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
            { loading ? <Loading /> : fRooms }
            </div>
        </div>
    )
}

export default FeaturedRooms;
