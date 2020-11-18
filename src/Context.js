import React, { Component} from 'react';
// import items from './data';   // Local Data
import Client from './Contentful'; // Server 'Contenful' Data

export const RoomContext = React.createContext();
export const RoomConsumer = RoomContext.Consumer;

export class RoomProvider extends Component {

    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        pets: false,
        breakfast: false
    };

    // getData
    getData = async () => {
        try {
            const response = await Client.getEntries({
                content_type: "resortRooms",
                // order: "sys.createdAt"   // This to sort the items by any field we select!
                order: "fields.price" // Order the items by the price
            });
            console.log(response.items); // console.logging
            const rooms = this.formatData(response.items);
            const featuredRooms = rooms.filter(room => room.featured === true);

            let maxPrice = Math.max(...rooms.map(item => item.price)),
                maxSize = Math.max(...rooms.map(item => item.size));

            this.setState({
                rooms,
                sortedRooms: rooms,
                featuredRooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize
            });
        }
        catch {

        }
    }

    componentDidMount(){
        this.getData();
    };

     formatData = (items) => {

       const tempItems = items.map(item => {
           let id = item.sys.id;
           let images = item.fields.images.map(image => image.fields.file.url);
           let room = { ...item.fields, images, id };

            return room;
       });

       return tempItems;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }

     getRooms = (slug) => {
        const tempRooms = [...this.state.rooms];
        const  room = tempRooms.find(room => room.slug === slug);
        return room;
    }

     handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        console.log(value);
        this.setState({ 
            [name]: value
         }, this.filterRooms);
    }
/*
==============================
== Rooms Filtering Function ==
==============================
*/
     filterRooms = () => {
        let { rooms, type, breakfast, pets, capacity, price, minSize, maxSize } = this.state;
        let tempRooms = [...rooms];
        // Filter By Rooms Type
        if(type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        // Filter By Capacity
        capacity = parseInt(capacity);
        if(capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        // Filter By Price
        price = parseInt(price);
        tempRooms = tempRooms.filter(room => room.price <= price);
        // Filter By Size
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        // Filter By Brekafast
        if(breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        // Filter By Pets
        if(pets) {
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        // Change The State Regarding The Search Query
        this.setState({
            sortedRooms: tempRooms
        });
    }

    render() {
        return (
            <RoomContext.Provider value={{
                ...this.state,
                getRooms: this.getRooms,
                handleChange: this.handleChange
            }}>
                { this.props.children }
            </RoomContext.Provider>
        )
    }
}

export const withRoomConsumer = (Component) => {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                { value => <Component {...props} context={value} /> }
            </RoomConsumer>
        )
    }
}
