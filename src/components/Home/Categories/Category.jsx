import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import CategoryItems from "./CategoryItems";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading,setLoading] = useState(false);
    const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    apiClient.get("/categories")
    .then((res) => {setCategories(res.data)
      console.log("category fetching in category.jsx",res.data);
    })
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
  }, []);
//   py-12 px-4 max-w-7xl
  return (
    <section className="py-16 px-8 mx-auto">
      {/* Category Heading  */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Browse Categories</h2>
        <a
          href="#"
          className="btn btn-secondary px-4 py-4 rounded-full text-lg"
        >
          View All
        </a>
      </div>
       {/* Spinner */}
      {loading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner text-center loading-xl text-secondary"></span>
        </div>
      )}

       {error && <ErrorAlert error={error} />}

      {/* Category Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <CategoryItems key={category.id} index={index} category={category} />
        ))}
      </div>


      {!loading && !error && categories.length ===0 && (
        <p className="text-center text-gray-500 mt-6">No Categories Available</p>
      )}
    </section>
  );
};

export default Category;