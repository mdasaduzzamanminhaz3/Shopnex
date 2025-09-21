import { useForm } from "react-hook-form";
import useAuthContext from "../hooks/useAuthContext";
import ErrorAlert from "../components/ErrorAlert";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const {errorMsg,loginUser} = useAuthContext();
  const [loading,setLoading] = useState(false);
  const onSubmit = async (data) => {
    setLoading(true);
    try {
   await loginUser(data);
   navigate("/dashboard");    
    } catch (error) {
        console.log("Login Failed",error);
    } finally{
        setLoading(false);
    }
  };
  return (
    <section className="bg-gray-50">
      <div className="bg-white flex min-h-fit w-full max-w-md flex-col justify-center px-6 py-12 lg:px-8 shadow-lg mx-auto my-6 rounded-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {errorMsg && <ErrorAlert error={errorMsg}/>}
          <h2 className=" text-2xl font-bold tracking-tight text-gray-700">
            Sign in
          </h2>
          <h6 className="text-sm text-gray-500 font-semibold tracking-tight my-2">Enter your email and password to access your account</h6>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            action="#"
            method="POST"
            className="space-y-6 "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-500"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={`block w-full rounded-md bg-white border border-gray-400 px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm ${
                    errors.email ? "input-error" : ""
                  }`}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className="label-text-alt text-error">
                    {errors.email.message}
                  </span>
                )}
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-pink-400 hover:text-pink-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={`block w-full rounded-md border border-gray-400 bg-white px-3 py-1.5 text-base text-gray-700 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 sm:text-sm ${
                    errors.password ? "input-error" : ""
                  }`}
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="label-text-alt text-error">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="btn btn-secondary"
              >
                {loading ? "Loggin In...": "Login"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Don't have an account?
            <a
              href="#"
              className="font-semibold text-pink-400 hover:text-pink-300"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
