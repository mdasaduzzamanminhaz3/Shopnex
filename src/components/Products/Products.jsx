import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ErrorAlert from "../ErrorAlert";
import apiClient from "../../services/api-client";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/products/")
      .then((res) => setProducts(res.data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-gray-50 mx-auto py-16 ">
      <div className="flex justify-between items-center px-4 md:px-8 mb-4">
        <h2 className="text-2xl font-bold">Trending Products</h2>

        
        <a
          href="/shop" className="btn btn-secondary px-4 py-4 rounded-full text-lg">
          View All
        </a>
        
      </div>
      {/* Loading skeleton */}
      {isLoading && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="mt-4 px-4 mr-2 container"
        >
          {Array(6)
            .fill()
            .map((_, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="card bg-gradient-to-br from-blue-50 to-pink-50 shadow-md w-full max-w-xs mx-auto rounded-xl p-4">
                  <Skeleton height={200} className="rounded-xl mb-4" />
                  <Skeleton height={20} width={`80%`} className="mb-2" />
                  <Skeleton height={20} width={`60%`} className="mb-2" />
                  <Skeleton count={2} />
                  <Skeleton height={40} className="mt-4 rounded" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}

      {error && <ErrorAlert error={error} />}
      
      {/* product slider */}

      {!isLoading && !error && products.length > 0 &&(

      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="mt-4 px-4 mr-2 container"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center hover:shadow-lg">
            <ProductItem key={product.id} product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      )}

      {!isLoading && !error && products.length ===0 && (
        <p className="text-center text-gray-500 mt-6">No Products Available</p>
      )}
    </section>
  );
};

export default Products;
