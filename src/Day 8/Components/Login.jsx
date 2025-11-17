import { useFormik } from "formik";
import * as yup from "yup";
import s1 from "../../assets/s1.avif";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./Layout";

export const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      // debugger
      const userData = localStorage.getItem("userdata");
            if (!userData) {
        setLoginError("No account found. Please sign up first.");
        return;
      }

      const user = JSON.parse(userData);

      if (values.email === user.email && values.password === user.password) {
      localStorage.setItem("isLoginUser",true)
      navigate("/Product")
      } else {
        setLoginError("Invalid email or password");
         localStorage.setItem("isLoginUser",false)
      }
    },
  });

  return (
    <Layout>
    <div
      style={{
        backgroundImage: `url(${s1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex items-center justify-center bg-no-repeat"
    >
      <div className="bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl rounded-2xl p-10 w-[90%] md:w-[400px] flex flex-col items-center text-white">
        <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">WIX</h1>
        <h2 className="text-2xl font-semibold mb-2">Login</h2>
        <p className="text-sm mb-6 text-gray-200">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-300 hover:text-blue-400 underline"
          >
            Sign Up
          </Link>
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col space-y-4"
        >
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-300 text-sm mt-1">
                {formik.errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-100"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full mt-1 p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-300 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="flex justify-end w-full">
            <span className="text-sm text-blue-300 hover:text-blue-400 cursor-pointer underline">
              Forgot Password?
            </span>
          </div>

          {loginError && (
            <p className="text-red-800 text-sm text-center">{loginError}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
        </Layout>
  );
};
