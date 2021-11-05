import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId ,serviceName } = useParams();
    return (
        <div>
            <h2 className="btn btn-dark">My Order Item :{serviceId}{serviceName}</h2>
          
        </div>
    );
};

export default Booking;