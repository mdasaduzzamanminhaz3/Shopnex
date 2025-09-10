import axios from 'axios';
import  { useEffect } from 'react';
const Products = () => {
    useEffect(() =>{
        axios.get("https://e-commerce-azure-zeta.vercel.app/api/v1/products")
        .then((res) => console.log(res.data));
    },[]);

    return (
        <div>
            
        </div>
    );
};

export default Products;