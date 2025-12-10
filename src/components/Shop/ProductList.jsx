import React from 'react';
import ProductItem from '../Products/ProductItem';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductList = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
        {Array(10).fill().map((_, index) => (
          <div
            key={index}
            className="card bg-gradient-to-br from-blue-50 to-pink-50 shadow-md w-full max-w-xs mx-auto rounded-xl p-4"
          >
            <Skeleton height={200} className="rounded-xl mb-4" />
            <Skeleton height={20} width={`80%`} className="mb-2" />
            <Skeleton height={20} width={`60%`} className="mb-2" />
            <Skeleton count={2} />
            <Skeleton height={40} className="mt-4 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;