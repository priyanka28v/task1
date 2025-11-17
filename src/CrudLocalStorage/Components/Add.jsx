// import { useFormik } from "formik";
// import PhoneInput from "react-phone-input-2";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";
// import * as yup from "yup";
// import Select from "react-select";
// import { v4 as uuid } from "uuid";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { useParams } from "react-router-dom";
// import signup from '../../assets/signup.jpg'
// import { useEffect, useState } from "react";
// import Navbar from "./Navbar";

// const Home = () => {

//   const navigate = useNavigate();
  
//   const [userData,setUserData]=useState([])

//     let {id}=useParams()

//     useEffect(()=>{

//       if(id){
//         const data=JSON.parse(localStorage.getItem('userData'))
//         console.log((data))
//         const user=data.find((user)=>user.id==id)
//         setUserData(user)
//       }
//     },[id])

//   const options = [
//     { value: "badminton", label: "Badminton" },
//     { value: "indoorGames", label: "Indoor games" },
//     { value: "music", label: "Listening music" },
//     { value: "reading", label: "Reading books" },
//   ];

//   const popup=(pop)=>{
//     Swal.fire({
//           title: "Success!",
//           text: pop===id?"User updated successfully.":"User added successfully.",
//           icon: "success",
//           timer: 1500,
//           showConfirmButton: false,
//         });
//   }

//   const validationSchema = yup.object({
//     firstName: yup.string().required("First name is required"),
//     lastName: yup.string().required("Last name is required"),
//     email: yup.string().email("Invalid email format").required("Email is required"),
//     phone: yup.string().required("Contact details are required"),
//     bio: yup.string().required("Bio is required"),
//     hobbies: yup.string().required("Hobbies are required"),
//     address: yup.string().required("Address is required"),
//   });

//   const formik = useFormik({
//   enableReinitialize: true,
//   initialValues: {
//     firstName: userData?.firstName || "",
//     lastName: userData?.lastName || "",
//     email: userData?.email || "",
//     phone: userData?.phone || "",
//     bio: userData?.bio || "",
//     hobbies: userData?.hobbies || "",
//     address: userData?.address || "",
//   },
//   validationSchema,
//   onSubmit: (values, { resetForm }) => {
//     const data = JSON.parse(localStorage.getItem("userData"));
//     let updatedData = [...data];

//     if (id) {
//       const userIndex = data.findIndex((user) => user.id === id);
//       if (userIndex !== -1) {
//         updatedData[userIndex] = { ...values };
//         localStorage.setItem("userData", JSON.stringify(updatedData));
//         popup(id)
//       }
//     } else {
//       const newId = uuid().slice(0, 3); 
//       const newUser = { ...values, id: newId };
//       updatedData.push(newUser);
//       localStorage.setItem("userData", JSON.stringify(updatedData));
//       popup(newId)
//     }

//     resetForm();
//   },
// });


//   return (
//     <>
//     <div style={{
//     backgroundImage: `url(${signup})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//   }}
//   className="flex flex-col items-center justify-center">
//     <div className="flex-flex-col ">
//       <h1 className="text-3xl place-self-center p-4 m-3 w-94 text-center font-bold ">
//         Signup 
//       </h1>
//       <button
//             type="button"
//             className="rounded-xl hover:bg-emerald-100 p-1 mr-2 text-2xl w-55 place-self-end cursor-pointer  text-black"
//             onClick={() => navigate("/display")}
//             >
//             Display All Users
//           </button>
//             </div>

//       <div className="border rounded-2xl p-10 w-[90%] md:w-[700px] flex flex-col items-center text-black backdrop-blur-md place-self-center">
//         <form onSubmit={formik.handleSubmit} className="w-full flex flex-col space-y-4">

//           {/* First Name */}
//           <label htmlFor="firstName" className="text-sm font-medium text-black">
//             First Name
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             placeholder="First Name..."
//             className="w-full mt-1 p-3 rounded-lg bg-purple/30 text-black border border-black/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             {...formik.getFieldProps("firstName")}
//           />
//           {formik.touched.firstName && formik.errors.firstName && (
//             <div className="text-red-600 font-bold">{formik.errors.firstName}</div>
//           )}

//           {/* Last Name */}
//           <label htmlFor="lastName" className="text-sm font-medium text-black">
//             Last Name
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             placeholder="Last Name..."
//             className="w-full mt-1 p-3 rounded-lg bg-purple/30 text-black border border-black/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             {...formik.getFieldProps("lastName")}
//           />
//           {formik.touched.lastName && formik.errors.lastName && (
//             <div className="text-red-600 font-bold">{formik.errors.lastName}</div>
//           )}

//           {/* Email */}
//           <label htmlFor="email" className="text-sm font-medium text-black">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Email..."
//             className="w-full mt-1 p-3 rounded-lg bg-purple/30 text-black border border-black/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             {...formik.getFieldProps("email")}
//           />
//           {formik.touched.email && formik.errors.email && (
//             <div className="text-red-600 font-bold">{formik.errors.email}</div>
//           )}

//           {/* Phone */}
//           <PhoneInput
//             country="us"
//             value={formik.values.phone}
//             onChange={(phone) => formik.setFieldValue("phone", phone)}
//             inputClass="rounded-lg p-2 border border-black w-full"
//           />
//           {formik.touched.phone && formik.errors.phone && (
//             <div className="text-red-600 font-bold">{formik.errors.phone}</div>
//           )}

//           {/* Bio */}
//           <label htmlFor="bio" className="text-sm font-medium text-black">
//             Bio
//           </label>
//           <ReactQuill
//             theme="snow"
//             value={formik.values.bio}
//             onChange={(content) => formik.setFieldValue("bio", content)}
//             className="bg-purple/30 border border-black/40 rounded-lg"
//           />
//           {formik.touched.bio && formik.errors.bio && (
//             <div className="text-red-600 font-bold">{formik.errors.bio}</div>
//           )}

//           {/* Hobbies */}
//           <label htmlFor="hobbies" className="text-sm font-medium text-black">
//             Hobbies
//           </label>
//           <Select
//             id="hobbies"
//             options={options}
//             value={options.find((opt) => opt.value === formik.values.hobbies) || null}
//             onChange={(option) => formik.setFieldValue("hobbies", option?.value || "")}
//             onBlur={formik.handleBlur}
//           />
//           {formik.touched.hobbies && formik.errors.hobbies && (
//             <div className="text-red-600 font-bold">{formik.errors.hobbies}</div>
//           )}

//           {/* Address */}
//           <label htmlFor="address" className="text-sm font-medium text-black">
//             Address
//           </label>
//           <textarea
//             id="address"
//             className="w-full mt-1 p-3 rounded-lg bg-purple/30 text-black border border-black/40 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             {...formik.getFieldProps("address")}
//           />
//           {formik.touched.address && formik.errors.address && (
//             <div className="text-red-600 font-bold">{formik.errors.address}</div>
//           )}
//           <button
//             type="submit"
//             className="rounded-xl border-black outline-2 m-3 p-3 text-xl w-25 place-self-center cursor-pointer bg-yellow-600 text-white"
//           >
//            {id? "update":"Add"} 
//                      </button>
                
//         </form>
//       </div>
//               </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import { useFormik } from "formik";

export default function MultiFormFormik() {
  const formik = useFormik({
    initialValues: {
      forms: [
        {
          name: "",
          email: "",
          phone: "",
          city: "",
        },
      ],
    },
    onSubmit: (values) => {
    
      localStorage.setItem("allForms", JSON.stringify(values.forms));
      console.log("Saved:", values.forms);
      alert("Forms Submitted Successfully!");
    },
  });

  const addForm = () => {
    formik.setFieldValue("forms", [
      ...formik.values.forms,
      { name: "", email: "", phone: "", city: "" },
    ]);
  };

  const removeForm = (index) => {
    const newForms = [...formik.values.forms];
    newForms.splice(index, 1);
    formik.setFieldValue("forms", newForms);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dynamic Forms with Formik</h1>

      <form onSubmit={formik.handleSubmit}>
        {formik.values.forms.map((form, index) => (
          <div
            key={index}
            style={{
              border: "2px solid black",
              padding: 20,
              marginTop: 20,
            }}
          >
            <h3>Form {index + 1}</h3>

            <input
              type="text"
              placeholder="Name"
              name={`forms[${index}].name`}
              value={form.name}
              onChange={formik.handleChange}
              className="border p-2 w-full"
            />

            <input
              type="email"
              placeholder="Email"
              name={`forms[${index}].email`}
              value={form.email}
              onChange={formik.handleChange}
              className="border p-2 w-full mt-2"
            />

            <input
              type="text"
              placeholder="Phone"
              name={`forms[${index}].phone`}
              value={form.phone}
              onChange={formik.handleChange}
              className="border p-2 w-full mt-2"
            />

            <input
              type="text"
              placeholder="City"
              name={`forms[${index}].city`}
              value={form.city}
              onChange={formik.handleChange}
              className="border p-2 w-full mt-2"
            />

            {index > 0 && (
              <button
                type="button"
                onClick={() => removeForm(index)}
                style={{ background: "red", color: "white", marginTop: 10 }}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addForm}
          style={{
            background: "green",
            color: "white",
            padding: 10,
            marginTop: 20,
          }}
        >
          + Add Form
        </button>

        <button
          type="submit"
          style={{
            background: "blue",
            color: "white",
            padding: 10,
            marginTop: 20,
            display: "block",
          }}
        >
          Submit All
        </button>
      </form>
    </div>
  );
}
