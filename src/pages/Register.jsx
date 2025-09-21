import  { useState } from "react";
import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
// import { useNavigate } from "react-router";

const Register = () => {
    const {registerUser,errorMsg} = useAuthContext();
    const [successMsg,setSuccessMsg] = useState("");
    const [loading,setLoading] = useState(false);
    // const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors},watch} = useForm();
    const onSubmit = async (data) => {
      delete data.confirm_password;
      setLoading(true);
        try {
           const response = await registerUser(data);
           if(response.success){
            setSuccessMsg(response.message);
            // setTimeout(() => navigate("/login"),3000);
           }

        } catch (error) {
            console.log("Registration Faield",error);
        } finally{
          setLoading(false);
        }
    };
  return (
    <section className="bg-gray-50">
      <div className="bg-white flex min-h-fit w-full max-w-md flex-col justify-center px-6 py-12 lg:px-8 shadow-lg mx-auto my-6 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {errorMsg && <ErrorAlert error={errorMsg}/>}
            {successMsg && (
              <div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>{successMsg}</span>
</div>
            )}
          <h2 className=" text-2xl font-bold tracking-tight text-gray-700">
            Sign Up
          </h2>
          <h6 className="text-sm text-gray-500 font-semibold tracking-tight my-2">
            Create an account to get started
          </h6>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)}  className="space-y-6 ">
            <div>
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-500"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  placeholder="Enter your First Name"
                  {...register('first_name',{required:"First Name is required"})}
                  className="block w-full rounded-md bg-white border border-gray-400 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />
                {errors.first_name && (
                  <span className="label-text-alt text-error">
                    {errors.first_name.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-500"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                placeholder="Enter your Last Name"
                {...register("last_name",{required:"Last Name is required"})}
                  className="block w-full rounded-md bg-white border border-gray-400 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />
                {errors.last_name && (
                  <span className="label-text-alt text-error">
                    {errors.last_name.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  name="email"
                {...register("email",{required:"Email is required"})}

                  placeholder="example@mail.com"
                  className="block w-full rounded-md bg-white border border-gray-400 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />
                {errors.email && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-500"
              >
                Address
              </label>
              <div className="mt-1">
                <input
                  id="address"
                  type="address"
                  name="address"
                {...register("address")}

                  placeholder="7/A Dhanmondi, Dhaka"
                  className="block w-full rounded-md bg-white border border-gray-400 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />

              </div>
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-500"
              >
               Phone Number
              </label>
              <div className="mt-1">
                <input
                  id="phone_number"
                  type="text"
                  name="phone_number"
                 {...register("phone_number")}
                  placeholder="Enter your Phone Number"
                  className="block w-full rounded-md bg-white border border-gray-400 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-500"
                >
                  Password
                </label>

              </div>
              <div className="mt-1">
                <input
                  id="password"
                  type="password"
                  name="password"
                  {...register("password",{required:"Password is required",minLength:{value:8,message:"Password must be at least 8 characters"}})}
                  className="block w-full rounded-md border border-gray-400 bg-white px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />
                {errors.password && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium text-gray-500"
                >
                  Confirm Password
                </label>

              </div>
              <div className="mt-1">
                <input
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                {...register("confirm_password",{required:"Confirm password is required",validate:(value) => value === watch("password") || "Password do not match"})}
                  className="block w-full rounded-md border border-gray-400 bg-white px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm "
                />
                {errors.confirm_password && (
                  <span className="label-text-alt text-error">
                    {errors.confirm_password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button disabled={loading} type="submit" className="btn btn-secondary">
              {loading ? "Sign Up...": "Sign Up"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Already have an account?
            <a
              href="#"
              className="font-semibold text-pink-400 hover:text-pink-300"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
