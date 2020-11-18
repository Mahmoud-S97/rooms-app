import React from 'react';
import Spinner from '../images/gif/loading-arrow.gif';

const Loading = () => {
    return (
        <div className="loading">
            <h4>Wait is Loading...</h4>
            <img src={Spinner} alt="Wait is Loading..." />
        </div>
    )
}

export default Loading;
