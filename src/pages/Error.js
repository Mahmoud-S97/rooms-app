import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <div>
            <Hero>
                <Banner title="404" subTitle="Page Not Found">
                    <Link to="/" className="btn-primary">Back Home</Link>
                </Banner>
            </Hero>
        </div>
    )
}

export default Error;