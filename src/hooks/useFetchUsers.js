import React, { useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
      try {
        const res = await authApiClient.get("/auth/users/");
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
        fetchUsers();
    },[])

    

    return users
};

export default useFetchUsers;