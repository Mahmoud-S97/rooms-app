import React, { Component } from 'react';
import Title from '../components/Title';
import { FaShuttleVan, FaBeer, FaCocktail, FaHiking } from 'react-icons/fa';

class Services extends Component {

state = {
    services: [
        {
            icon: <FaShuttleVan />,
            title: "Free Shuttle",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        },
        {
            icon: <FaBeer />,
            title: "Strongest Beer",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        },
        {
            icon: <FaCocktail />,
            title: "Free Cocktails",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        },
        {
            icon: <FaHiking />,
            title: "Endless Hiking",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
        }
    ]
}

    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}

export default Services;