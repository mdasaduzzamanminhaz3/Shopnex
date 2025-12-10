import React from 'react';
import useFetchCategories from '../../../hooks/useFetchCategories';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from 'react-router';
import authApiClient from '../../../services/auth-api-client';

const D_Category = () => {
  const categories = useFetchCategories();
const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await authApiClient.delete(`/categories/${id}/`);
      alert("Category deleted successfully!");
    } catch (error) {
      console.log("Error deleting category", error);
    }
  };
  if (!categories || categories.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-serif font-bold text-center mb-8 text-purple-700">
          Category List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
          {Array(4).fill().map((_, index) => (
            <div
              key={index}
              className="w-full min-h-60 bg-white shadow rounded-xl p-4 flex flex-col justify-between"
            >
              <Skeleton height={30} width="60%" className="mx-auto mb-4" />
              <div className="flex justify-center gap-4">
                <Skeleton width={80} height={35} />
                <Skeleton width={80} height={35} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-serif font-bold text-center mb-8 text-purple-700">
        Category List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative w-full min-h-60 bg-gradient-to-tr from-purple-300 to-blue-200 
                       hover:from-purple-400 hover:to-blue-300 shadow-lg rounded-xl 
                       transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="relative flex flex-col justify-between h-full p-4">
              <h2 className="text-lg font-bold text-center text-gray-800 group-hover:text-purple-900">
                {category.name || <Skeleton width={80} height={35} />}
              </h2>
              <p className="text-sm text-center text-gray-700 mt-2 line-clamp-3">
                {category.description || <Skeleton width={120} height={20} />}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <Link to={`/dashboard/category/update/${category.id}`} className="btn btn-sm bg-green-500 hover:bg-green-600 text-white shadow-md">
                  Update
                </Link>
                <button onClick={() => handleDelete(category.id)} className="btn btn-sm bg-red-500 hover:bg-red-600 text-white shadow-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default D_Category;