import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../../../services/auth-api-client";
import { useNavigate } from "react-router";

const D_AddCategory = () => {
  const {
    register,
    handleSubmit,
  } = useForm();
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
        await authApiClient.post("/categories/",data)
        alert("Category created successfully!");
        navigate("/dashboard/categories")
    } catch (error) {
        console.log("error creating category", error);
    }finally{
        setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h1 className="font-serif font-bold text-3xl text-center">
        Create a Category
      </h1>
      <div>
        <label className="block font-medium">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          className="input input-bordered w-full"
        ></input>
      </div>
      <div>
        <label className="block font-medium">Description</label>
        <input
          {...register("description", { required: "Description is required" })}
          className="textarea textarea-bordered w-full"
        ></input>

      </div>
      <button disabled={loading} className="btn btn-success mt-4" type="submit">{loading ? "Creating..." : "Create"}
</button>
    </form>
  );
};

export default D_AddCategory;
