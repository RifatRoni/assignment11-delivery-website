import React from 'react';
import notFound from '../../images/notfound/notfound.png'

const NotFound = () => {
    return (
        <div className="container d-flex align-items-center">
            <img src={notFound} className="w-75 mx-auto" alt="" />
        </div>
    );
};

export default NotFound;