import React from "react";
import defaultImage from "../../assets/default_image.png";
import { Link } from "react-router";

const ProductItem = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`} className="block">
      <div className="card bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 
                      shadow-md hover:shadow-lg transition-all duration-300 
                      w-full max-w-xs mx-auto rounded-xl">

        {/* Image */}
        <figure className="px-4 pt-4">
          <img
            src={
              product.images.length > 0 ? product.images[0].image : defaultImage
            }
            alt={product.name}
            className="rounded-xl w-full h-48 md:h-56 object-cover"
          />
        </figure>

        {/* Body */}
        <div className="card-body items-center text-center px-4">
          <h2 className="card-title text-lg md:text-xl font-bold line-clamp-1">
            {product.name}
          </h2>

          <h3 className="font-bold text-xl text-red-700">${product.price}</h3>

          <p className="text-gray-700 text-sm line-clamp-2">
            {product.description}
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
