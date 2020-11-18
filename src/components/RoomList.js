import React from 'react';
import Room from './Room';

const RoomList = ({ rooms }) => {

    if(rooms.length === 0) {
        return <div className="empty-search">
            <h3>Unfortunately, There's No Rooms Matched Your Search Parameters</h3>
        </div>
    }

    return (
        <div className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => (
                    <Room key={item.id} roomData={item} />
                ))}
            </div>
        </div>
    )
}

export default RoomList;
