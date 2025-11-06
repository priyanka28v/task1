import { useFormik } from "formik";
import * as yup from "yup";
import s1 from "../../assets/s1.avif";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { useState, useEffect, use } from "react";
import Select from "react-select";
import 'react-phone-input-2/lib/style.css';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'

export const Signup = () => {
  const Navigate=useNavigate()  

  const courses = [
    { value: 'masters', label: "MCA" },
    { value: 'graduation', label: "BCA" },
    { value: 'diploma', label: "12th" },
    { value: 'matrix', label: "10th" },
  ];

  const loginAlert=()=>{
    withReactContent(Swal).fire({
      title:<i>Signup Successfully</i>,
      confirmButtonText:"login"
    })
    .then((result)=>{
      if(result.isConfirmed){ 
        Navigate("/login")
      }
    })
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      contact: "",
      // course: {},
      // quill: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(5, "Name must be at least 5 characters")
        .required("Required"),
      email: yup
        .string()
        .email("Invalid email format")
        .required("Required"),
      password: yup
        .string()
        .min(6, "Password must be at least 6 characters")
        .required("Required"),
      contact: yup
        .string()
        .min(8, "Invalid contact number")
        .required("Required"),
      // course: yup.object().required("Please select a course"),
    }),

    onSubmit: (values) => {
      console.log("Form Data:", values);
      localStorage.setItem("userdata", JSON.stringify(values));

    },
  });

 
  useEffect(() => {
    
    const storedData = localStorage.getItem("userdata");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      formik.setValues(parsed);
    }
  }, []);

 
  useEffect(() => {
    if (formik.values) {
      localStorage.setItem("userdata", JSON.stringify(formik.values));
    }
  }, [formik.values]);


  const resetForm = () => {
    localStorage.removeItem("userdata");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${s1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="flex items-center justify-center"
    >

  <div className="border rounded-2xl p-10 w-[90%] md:w-[400px] flex flex-col items-center text-white bg-black/40 backdrop-blur-md">
        <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">WIX</h1>
        <h2 className="text-2xl font-semibold mb-2">Sign Up</h2>
        <p className="text-sm mb-6 text-gray-200">
          Already have an account?
          <span className="text-blue-300 hover:text-blue-400 cursor-pointer underline">
            <Link to="/login"> Login</Link>
          </span>
        </p>

        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col space-y-4">
            <label htmlFor="name" className="text-sm font-medium text-gray-100">
              Full Name
            </label>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-1 p-3 rounded-lg bg-white/30 text-white placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-300 text-sm mt-1">{formik.errors.name}</p>
            )}
          </div>

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
              <p className="text-red-300 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

        
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-100">
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
              <p className="text-red-300 text-sm mt-1">{formik.errors.password}</p>
            )}
          </div>

      
          <div>
            <label htmlFor="contact" className="text-sm font-medium text-gray-100">
              Contact
            </label>
            <PhoneInput
              country={"in"}
              value={formik.values.contact}
              onChange={(value) => formik.setFieldValue("contact", value)}
              enableSearch={true}
              inputClass="w-full mt-1 p-3 rounded-lg bg-white/30 text-black placeholder-gray-200 border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {formik.touched.contact && formik.errors.contact && (
              <p className="text-red-300 text-sm mt-1">{formik.errors.contact}</p>
            )}
          </div>

          {/* Course */}
          {/* <div>
            <label htmlFor="course" className="text-sm font-medium text-gray-100">
              Course
            </label>
            <Select
              id="course"
              name="course"
              value={formik.values.course}
              options={courses}
              onChange={(option) => formik.setFieldValue("course", option)}
              onBlur={formik.handleBlur}
              className="w-full mt-1 rounded-lg text-black"
            />
            {formik.touched.course && formik.errors.course && (
              <p className="text-red-300 text-sm mt-1">{formik.errors.course}</p>
            )}
          </div> */}

          {/* <div>
            <label htmlFor="quill" className="text-sm font-medium text-gray-100">
              About You
            </label>
            <ReactQuill
              theme="snow"
              value={formik.values.quill}
              onChange={(content) => formik.setFieldValue("quill", content)}
              onBlur={() => formik.setFieldTouched("quill", true)}
              className="w-full mt-1 bg-white rounded-lg text-black"
            />
            <div dangerouslySetInnerHTML={{__html:formik.values.quill}}></div>
          </div> */}

          <button
            type="submit"
            onClick={ loginAlert}
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg mt-4"
            >
            Create Account
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="w-full bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg mt-2"
          >
            RESET
          </button>
        </form>
      </div>
  {/* )} */}
    </div>
  );
};
