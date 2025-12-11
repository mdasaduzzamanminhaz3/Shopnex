import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';
import { GiSettingsKnobs } from 'react-icons/gi';

const useFetchOrder = () => {

const  [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(false);
  useEffect(()=> {
    const fetchOrder =  async () => {
        setLoading(true);
      try {
        const res = await authApiClient.get('/orders/');
        // console.log(res.data);
        setOrders(res.data)
      } catch (error) {
        console.log("Fetching order failed",error);
      }finally{
        setLoading(false);
      }
    }
    fetchOrder()
  },[])
    return {orders ,loading};
};

export default useFetchOrder;