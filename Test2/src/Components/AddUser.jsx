import {useFormik } from "formik"
import * as yup from 'yup'
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

 export const AddUser=()=>{
    const navigate=useNavigate()

    const validationSchema=yup.object({
        userForms:yup.array().of(
            yup.object({
                fullName: yup.string().required("Name is required"),
                  email: yup.string().email("Invalid email").required("Email is required"),
                  contact: yup.string().required("contact is required"),
                  discription:yup.string().required("discription are required")
            })
        )
    })

        const skills=[
            {value:"playing",label:"playing Badminton"},
            {value:"books",label:"Reading Books"},
            {value:"listening",label:"Listening music"},
            {value:"dancing",label:"Dancing"},
        ]
          const [selectedOption, setSelectedOption] = useState(null);

    const formik=useFormik({
        initialValues:{
            userForms:[
                {
                    fullName:"",
                    email:"",
                    contact:"",
                    skills:"",
                    discription:""
                },
            ]
        },
        validationSchema,
         onSubmit:((values,{resetForm})=>{
             try{
            console.log(values)
            
            const data=JSON.stringify(values)
            console.log(data)
            const allData=sessionStorage.setItem("users",JSON.stringify(values))
            alert("form submitted")
            resetForm()
        }catch(err){
            console.log(err)
        }
   })
})

    const addButton=()=>{
    formik.setFieldValue("userForms",[...formik.values.userForms,{fullName:"",email:"",contact:"",skills:"",
                    discription:""}])}



        const deleteButton=(index)=>{
            const allForms=[...formik.values.userForms]
            console.log(allForms)
            allForms.splice(index,1)
            formik.setFieldValue("userForms",[...allForms])
            console.log(allForms)
        }

    console.log(formik)
    return(
        <>
        <form onSubmit={formik.handleSubmit} >
            <div className="">
                {formik.values.userForms.map((userForm,index)=>(
            <div key={index}>
              <h1 className="place-self-center text-2xl font-bold p-8 ">Form</h1>
              <button type="button" className="text-3xl w-30 ml-[1200px] mt-5 rounded-xl outline-2 cursor-pointer bg-gray-400 p-3" onClick={()=>navigate('/list')}>list</button>
               <div className="flex flex-col rounded-xl place-self-center  border-white outline-2 p-7 w-200">

                {/* fullname */}

                <label htmlFor="fullName"
                className="text-xl font-bold text-blue-700"
                >fullName</label>
                <br></br>
                <input type="text" id="fullName" placeholder="enter your Fullname..."
                name={`userForms[${index}].fullName`}
                value={userForm.fullName}
                className="rounded-xl outline-2 p-6 "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.userForms && formik.touched.userForms[index]?.fullName && formik.errors.userForms && formik.errors.userForms[index]?.fullName && (
                    <div className="text-red-700 font-bold">
                        {formik.errors.userForms[index].fullName}
                        </div>
                )}
                <br></br>

                {/* email */}

                <label htmlFor="email"
                  className="text-xl font-bold text-blue-700">email</label><br></br>
                <input type="email" id="email" placeholder="enter your email..."
                 name={`userForms[${index}].email`}
                  value={userForm.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                 className="rounded-xl outline-2 p-6 "
                />
                 {formik.touched.userForms && formik.touched.userForms[index]?.email && formik.errors.userForms && formik.errors.userForms[index]?.email && (
                    <div className="text-red-700 font-bold">
                        {formik.errors.userForms[index].email}
                        </div>
                )}
                <br></br>

                {/* phone  */}

                <label htmlFor="contact"
                  className="text-xl font-bold text-blue-700 mb-2">Contact</label>
                 <PhoneInput
                country={'us'}
                className="rounded-xl outline-2 p-4 "
                name={`userForms[${index}].contact`}
                 value={userForm.contact}
                 onChange={(contact)=>{formik.setFieldValue(`userForms[${index}].contact`,contact)}}
                /><br>
                </br>

                 {formik.touched.userForms && formik.touched.userForms[index]?.contact && formik.errors.userForms && formik.errors.userForms[index]?.contact && (
                    <div className="text-red-700 font-bold">
                        {formik.errors.userForms[index].contact}
                        </div>
                )}

                {/* select */}

                <label htmlFor="skills"
                  className="text-xl font-bold mb-2
                   text-blue-700 mb-2">
                    skills</label>
                 <Select                
                  name={`userForms[${index}].skills`}
                defaultValue={selectedOption}
                onChange={(skills)=>formik.setFieldValue(`userForms[${index}].skills`,skills)}
                options={skills}
                />
                
                 {formik.touched.userForms && formik.touched.userForms[index]?.skills && formik.errors.userForms && formik.errors.userForms[index]?.skills && (
                    <div className="text-red-700 font-bold">
                        {formik.errors.userForms[index].skills}
                        </div>
                )}

                <br></br>

                {/* editor  */}

                <label htmlFor="discription"
                name={`userForms[${index}].discription`}
                  className="text-xl font-bold text-blue-700 mb-2">Discription</label>
                <ReactQuill theme="snow"
                 className="rounded-xl outline-2 p-4  mb-2"
                  value={userForm.discription} 
                 onChange={(discription)=>formik.setFieldValue(`userForms[${index}].discription`,discription)} 
                 />
                  {formik.touched.userForms && formik.touched.userForms[index]?.discription && formik.errors.userForms && formik.errors.userForms[index]?.discription && (
                    <div className="text-red-700 font-bold">
                        {formik.errors.userForms[index].discription}
                        </div>
                )}
             {index>0 && (
                <>
                 <button type="button" className="text-3xl w-30 ml-[300px] mt-5 rounded-xl outline-2 cursor-pointer bg-yellow-400 p-3" onClick={()=>deleteButton(index)}> delete</button>
                </>
             )}
            </div>

             <button type="submit" className="text-3xl ml-[300px] mt-5 rounded-xl cursor-pointer outline-2 bg-green-400 p-3"> submit</button>
             <button type="button"  className="text-3xl ml-[700px] mt-4  rounded-xl  cursor-pointer outline-2 bg-red-500 p-4 "  onClick={()=>{addButton()}}> Add</button>
                </div>

            ))}
            </div>
        </form>
        </>
    )
}



   
