import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import Banner from '../components/Banner';
import defaultBcg from '../images/room-1.jpeg';
import StyledHero from '../components/StyledHero';

export class SingleRoom extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

static contextType = RoomContext;

    render() {
    
        const room = this.context.getRooms(this.state.slug);

        if(!room) {
            return <div className="error">
                <h3>No Such Room Could Be Found...</h3>
                <Link to="/rooms" className="btn-primary" >Back to Rooms</Link>
            </div>
        }

        const { name, images, extras, description, pets, breakfast, size, capacity, price } = room;
        const [ mainImg, ...defaultImgs ] = images;

        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg}>
                <Banner title={`${name} Room`}>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImgs.map((img, index) => (
                        <img key={index} src={img} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Details:</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info:</h3>
                        <h6>Price: ${price}</h6>
                        <h6>Size: {size} SQFT</h6>
                        <h6>Max Capacity: {capacity > 1 ? `${capacity} People` : `${capacity} Person`}</h6>
                        <h6>{pets ? "Pets Allowed" : "Pets Not Allowed"}</h6>
                        <h6>{breakfast && "Breakfast Free Included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras:</h6>
                <ul className="extras">
                    {extras.map((item, index)=> {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}

export default SingleRoom;
