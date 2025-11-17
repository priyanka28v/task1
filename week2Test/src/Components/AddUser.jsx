import { Formik,useFormik } from "formik"
import * as yup from 'yup'
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css'

const AddUser=()=>{


        // const validationSchema=yup.object({
        //     userForms:yup.array().of({
        //         yup.object({

        //         })
        //     })
        // })

        const skills=[
            {value:"playing",lable:"playing Badminton"},
            {value:"books",lable:"Reading Books"},
            {value:"listening",lable:"Listening music"},
            {value:"dancing",lable:"Dancing"},
        ]
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
                // validationSchema,
                onsubmit=((values)=>{
                    console.log(values)
                })
            ]
        }
    })

    return(
        <>
        <form onsubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="fullName">fullName</label>
                <input type="text" id="fullName" placeholder="enter your Fullname..."/>

                <label html for="email">email</label>
                <input type="email" id="email" placeholder="enter your email..."/>

                 <PhoneInput
                country={'us'}
                // value={formik}
                // onChange={()=>{formik.setFieldValue("contact",)}}
                />
                 <Select
                defaultValue={skills}
                // onChange={setSelectedOption}
                options={options}
                />
                <ReactQuill theme="snow" value={value} onChange={setValue} />;
                
            </div>


        </form>
        </>
    )
}

export default AddUser