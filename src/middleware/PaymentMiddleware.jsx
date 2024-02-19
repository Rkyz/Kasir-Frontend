import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentMiddleware = () => {
    const navigate = useNavigate(); 

    useEffect(() => {
        const cartData = JSON.parse(sessionStorage.getItem('cartData'));
        const pelangganData = JSON.parse(sessionStorage.getItem('pelangganData'));
      
        if (cartData && pelangganData) {
            navigate('/payment'); 
        }
    }, [navigate]);
    

};

export default PaymentMiddleware;
