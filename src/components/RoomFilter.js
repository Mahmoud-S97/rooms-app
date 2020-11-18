import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({ rooms }) => {

    const roomContext = useContext(RoomContext);

    const { handleChange, type, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets, capacity } = roomContext;

    let types = getUnique(rooms, 'type');

    types = ["all", ...types];

    types = types.map((type, index) => {
        return <option key={index} value={type}>{type}</option>
    });

    const people = getUnique(rooms, 'capacity');
    const peopleSize = people.map((personsNumber, index)=> (
        <option key={index} value={personsNumber}>{personsNumber}</option>
    ))

    return (
        <div className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* Select Type */}
                    <div className="form-group">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                {/* End Select Type */}
                {/* Guests */}
                <div className="form-group">
                    <label htmlFor="guest">Guest</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {peopleSize}
                    </select>
                </div>
                {/* End Guests */}
                {/* Room Price */}
                <div className="form-group">
                    <label htmlFor="price">Room Price ${price}</label>
                    <input
                        type="range"
                        id="price"
                        className="form-control"
                        name="price"
                        value={price}
                        min={minPrice} max={maxPrice} onChange={handleChange} />
                </div>
                {/* End Room Price */}
                {/* Room Size */}
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" id="size" name="minSize" value={minSize < 0 ? 0 : minSize} className="size-input" onChange={handleChange} />
                        <input type="number" id="size" name="maxSize" value={maxSize < 0 ? 0 : maxSize} className="size-input" onChange={handleChange} />
                    </div>
                </div>
                {/* End Room Size */}
                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" id="breakfast" name="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" id="pets" name="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="pets">Pets</label>
                    </div>
                </div>
                {/* End Extras */}
            </form>
        </div>
    )
}

export default RoomFilter;
