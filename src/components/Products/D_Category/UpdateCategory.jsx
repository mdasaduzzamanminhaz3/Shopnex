import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../../../services/auth-api-client";
import { useNavigate, useParams } from "react-router";
import apiClient from "../../../services/api-client";

const UpdateCategory = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
const navigate = useNavigate();
const [loading, setLoading] = useState(false);
const {id } = useParams();
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await apiClient.get(`/categories/${id}/`);
        reset(res.data); // react-hook-form এ data বসানো
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, [id, reset]);



  const onSubmit = async (data) => {
    setLoading(true);
    try {
        await authApiClient.put(`/categories/${id}/`,data)
        alert("Category Update successfully!");
        navigate("/dashboard/categories")
    } catch (error) {
        console.log("error update category", error);
    }finally{
        setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-4">
      <h1 className="font-serif font-bold text-3xl text-center">
        Update Category
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
        <textarea
          {...register("description", { required: "Description is required" })}
          className="textarea textarea-bordered w-full"
        ></textarea>

      </div>
      <button disabled={loading} className="btn btn-success mt-4" type="submit">{loading ? "Updatine..." : "Update"}
</button>
    </form>
  );
};

export default UpdateCategory;
