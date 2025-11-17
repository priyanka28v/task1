import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as yup from "yup";
import { useState } from "react";

const Signup = () => {
  const [step, setStep] = useState(1);

  const validationSchema = yup.object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    contact: yup.string().required("Contact number is required"),
    twitter: yup.string(),
    facebook: yup.string().url("Invalid URL format"),
    linkedin: yup.string().url("Invalid URL format"),
    companyName: yup.string().required("Company name is required"),
    jobTitle: yup.string().required("Job title is required"),
    website: yup.string().url("Invalid URL format"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      contact: "",
      twitter: "",
      linkedin: "",
      facebook: "",
      companyName: "",
      jobTitle: "",
      website: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if(step < 3){
        setStep(step + 1);
      }else{
        sessionStorage.setItem("info", JSON.stringify(values));
        console.log("User data saved:", values);
        alert("Form submitted successfully!");
      }
    },
  });


  const nextStep = async () => {
    const errors = await formik.validateForm();//errors return krta h //validateform async hot

    if (step === 1) {
      if (!errors.username && !errors.email && !errors.contact) {
        setStep(2);
      } else {
        formik.setTouched({ username: true, email: true, contact: true });
      }
    } else if (step === 2) {
      if (!errors.twitter && !errors.facebook && !errors.linkedin) {
        setStep(3);
      } else {
        formik.setTouched({ twitter: true, facebook: true, linkedin: true });
      }
    }
  };

  const prevStep = () => setStep(step - 1);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-6">Signup Form</h1>
      <div className="text-2xl text-center mt-3 mb-6 rounded-full bg-blue-400 px-6 py-3 font-bold">
        Step {step}
      </div>

      <form onSubmit={formik.handleSubmit} className="flex flex-col items-center">

        {step === 1 && (
          <fieldset className="flex flex-col rounded-lg border-2 border-black p-6 w-80">
            <legend className="text-lg font-semibold">Personal Details</legend>

            <label htmlFor="username" className="mt-4">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.username && formik.errors.username && (
              <div className="text-red-600 font-bold">{formik.errors.username}</div>
            )}

            <label htmlFor="email" className="mt-4">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 font-bold">{formik.errors.email}</div>
            )}

            <label htmlFor="contact" className="mt-4">Contact:</label>
            <PhoneInput
              country={"us"}
              value={formik.values.contact}
              onChange={(phone) => formik.setFieldValue("contact", phone)}
              inputClass="rounded-lg p-2 border border-black w-full"
            />
            {formik.touched.contact && formik.errors.contact && (
              <div className="text-red-600 font-bold">{formik.errors.contact}</div>
            )}

            <button
              type="button"
              className="rounded-lg border-2 border-black mt-6 text-xl font-bold w-24 p-2 self-end"
              onClick={nextStep}
            >
              Next
            </button>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="flex flex-col rounded-lg border-2 border-black p-6 w-80">
            <legend className="text-lg font-semibold">Social Media</legend>

            <label htmlFor="twitter" className="mt-4">Twitter:</label>
            <input
              id="twitter"
              name="twitter"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.twitter}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.twitter && formik.errors.twitter && (
              <div className="text-red-600 font-bold">{formik.errors.twitter}</div>
            )}

            <label htmlFor="linkedin" className="mt-4">LinkedIn:</label>
            <input
              id="linkedin"
              name="linkedin"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedin}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.linkedin && formik.errors.linkedin && (
              <div className="text-red-600 font-bold">{formik.errors.linkedin}</div>
            )}

            <label htmlFor="facebook" className="mt-4">Facebook:</label>
            <input
              id="facebook"
              name="facebook"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.facebook}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.facebook && formik.errors.facebook && (
              <div className="text-red-600 font-bold">{formik.errors.facebook}</div>
            )}

            <div className="flex justify-between mt-6">
              <button
                type="button"
                className="rounded-lg border-2 border-black text-xl font-bold w-28 p-2"
                onClick={()=>prevStep()}
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-lg border-2 border-black text-xl font-bold w-28 p-2"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </fieldset>
        )}

        {/* STEP 3 - Company Info */}
        {step === 3 && (
          <fieldset className="flex flex-col rounded-lg border-2 border-black p-6 w-80">
            <legend className="text-lg font-semibold">Company Details</legend>

            <label htmlFor="companyName" className="mt-4">Company Name:</label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.companyName}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.companyName && formik.errors.companyName && (
              <div className="text-red-600 font-bold">{formik.errors.companyName}</div>
            )}

            <label htmlFor="jobTitle" className="mt-4">Job Title:</label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.jobTitle}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.jobTitle && formik.errors.jobTitle && (
              <div className="text-red-600 font-bold">{formik.errors.jobTitle}</div>
            )}

            <label htmlFor="website" className="mt-4">Website:</label>
            <input
              id="website"
              name="website"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.website}
              className="rounded-lg p-2 border border-black"
            />
            {formik.touched.website && formik.errors.website && (
              <div className="text-red-600 font-bold">{formik.errors.website}</div>
            )}

            
          </fieldset>
        )}
        <div className="flex justify-between mt-6">
              <button
                type="button"
                className="rounded-lg border-2 border-black text-xl font-bold w-28 p-2"
                onClick={prevStep}
              >
                Previous
              </button>
              <button
                type="submit"
                className="rounded-lg border-2 border-black text-xl font-bold w-28 p-2 bg-blue-500 text-white hover:bg-blue-700"
              >
                {step === 3?"Submit":"Next"}
              </button>
            </div>
      </form>
    </>
  );
};

export default Signup;
