import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useFetchCategories from "../../../hooks/useFetchCategories";
import apiClient from "../../../services/api-client";
import { useForm } from "react-hook-form";
import authApiClient from "../../../services/auth-api-client";

const Update_Products = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const categories = useFetchCategories();
  const [product, setProduct] = useState(null); 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    apiClient.get(`/products/${id}/`).then((res) => {
      setProduct(res.data);   
      reset(res.data);        
    });
  }, [id, reset]);

  const onSubmit = async (data) => {
    try {
    
      await authApiClient.put(`/products/${id}/`, {
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        category: data.category,
      });

      if (data.imageFile && data.imageFile.length > 0) {
        const formData = new FormData();
        formData.append("image", data.imageFile[0]);

        await authApiClient.post(`/products/${id}/images/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      alert("Product and image updated successfully!");
      navigate("/dashboard/products");
    } catch (error) {
      console.error("Error updating product or image:", error);
      alert("Failed to update product!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-gray-100 shadow rounded"
    >
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="input input-bordered w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          className="textarea textarea-bordered w-full"
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Price</label>
        <input
          type="number"
          step="0.01"
          {...register("price", {
            required: "Price is required",
            min: {
              value: 0,
              message: "Price must be positive",
            },
            valueAsNumber: true,
          })}
          className="input input-bordered w-full"
        />
        {errors.price && <p className="text-red-500">{errors.price.message}</p>}
      </div>

      <div>
        <label className="block font-medium">Stock Quantity</label>
        <input
          type="number"
          {...register("stock", { required: true, min: 0 })}
          className="input input-bordered w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Category</label>
        <select
          {...register("category", { required: "Category is required" })}
          className="select select-bordered w-full"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Image Upload */}
<div>
  <label className="block font-medium">Current Images</label>
  {product?.images?.length > 0 ? (
    <div className="flex flex-wrap gap-4 mb-2">
      {product.images.map((img) => (
        <img
          key={img.id}
          src={img.image}
          alt="Product"
          className="w-32 h-32 object-cover rounded"
        />
      ))}
    </div>
  ) : (
    <p className="text-gray-500">No images available</p>
  )}

  <label className="block font-medium">Update Images</label>
  <input
    type="file"
    accept="image/*"
    multiple   
    {...register("imageFile")}
    className="file-input file-input-bordered w-full"
  />
</div>

      <button type="submit" className="btn btn-primary">
        Update Product
      </button>
    </form>
  );
};

export default Update_Products;