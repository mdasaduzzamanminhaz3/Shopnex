import defaultImage from "../../../assets/default_image.png";
import useFetchProduct from "../../../hooks/useFetchProducts";

import FilterSection from "../../Shop/FilterSection";
import useFetchCategories from "../../../hooks/useFetchCategories";
import { useState } from "react";
import Pagination from "../../Shop/Pagination";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";



const D_Products = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products, loading, totalPages } = useFetchProduct(
    currentPage,
    priceRange,
    selectedCategory,
    searchQuery,
    sortOrder
  );
  const categories = useFetchCategories();
  const handlePriceChange = (index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });
    setCurrentPage(1);
  };

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

  if (!products || !Array.isArray(products)) return <p>No products</p>;
  return (
    <div>

      <FilterSection
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        categories={categories}
        selectedCategory={selectedCategory}
        handleCategoryChange={setSelectedCategory}
        searchQuery={searchQuery}
        handleSearchQuery={setSearchQuery}
        sortOrder={sortOrder}
        handleSorting={setSortOrder}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 ">
        {products.map((product) => (
          <div
            className="card bg-gradient-to-br from-blue-50 to-pink-50 hover:from-blue-100 hover:to-pink-100 
                      shadow-md hover:shadow-lg transition-all duration-300 
                      w-full max-w-xs mx-auto rounded-xl"
          >
            {/* Image */}
            <figure className="px-4 pt-4">
              <img
                src={
                  product.images?.length > 0
                    ? product.images[0]?.image
                    : defaultImage
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

              <h3 className="font-bold text-xl text-red-700">
                ${product.price}
              </h3>

              <p className="text-gray-700 text-sm line-clamp-2">
                {product.description}
              </p>

              <div className= " flex card-actions mt-3">
                <button className="btn outline outline-purple-600 hover:outline-purple-900 hover:outline-2 ">Update</button>
                <button className="btn outline outline-red-600 hover:outline-red-900 hover:outline-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default D_Products;