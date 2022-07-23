import React from 'react';
import data from '../data/data.json';

const fetchCheckout = async () => {
    const response = setTimeout(() => { 
        return data;
    }, 3000);
    return response;
}

export default fetchCheckout;