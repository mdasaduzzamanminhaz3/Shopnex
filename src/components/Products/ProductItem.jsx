import React from "react";
import defaultImage from "../../assets/default_image.png";
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`} className="block">
      <div className="card bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 
                      shadow-md hover:shadow-lg transition-all duration-300 
                      w-full max-w-xs mx-auto rounded-xl">

        {/* Image */}
        <figure className="px-4 pt-4">
 {product.images && product.images.length > 0 ? (
  <img src={product.images[0].image} alt={product.name} />
) : defaultImage ? (
  <img src={defaultImage} alt="default" />
) : (
  <Skeleton width={350} height={200} />
)}

        </figure>

        {/* Body */}
        <div className="card-body items-center text-center px-4">
          <h2 className="card-title text-lg md:text-xl font-bold line-clamp-1">
            {product.name || <Skeleton/> }
          </h2>

          <h3 className="font-bold text-xl text-red-700">${product.price}</h3>

          <p className="text-gray-700 text-sm line-clamp-2">
            {product.description || <Skeleton count={3}/> }
          </p>

          <div className="card-actions mt-3">
            <button className="btn btn-secondary w-full">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
