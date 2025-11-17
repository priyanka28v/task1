import { Formik, useFormik } from "formik"
import * as yup from "yup"

const Add=()=>{
   const validationSchema=yup.object({
    forms:yup.array().of(
        yup.object({
            fName: yup.string().required("Name is required"),
    //   email: yup.string().email("Invalid email").required("Email is required"),
    //   lName: yup.string().required("last name is required"),
        })
    )
   })
    const formik=useFormik({
        initialValues:{
            forms: [
                {
            fName:"",
            lName:"",
            email:""
        },
    ],
    },
    validationSchema,
    onSubmit:((values)=>{
        console.log(values)
        const myData=localStorage.setItem('data',JSON.stringify(values))

    })
})
// console.log(formik.values.forms)
console.log(formik)
const addButton=()=>{
    formik.setFieldValue("forms",[...formik.values.forms,{fName:"",lName:"",email:""}])
}
const deleteButton=(index)=>{
    const allForms=[...formik.values.forms]
    console.log(allForms)
    allForms.splice(index,1)
    formik.setFieldValue("forms",[...allForms])
    console.log(allForms)
}
    return(
        <>
        <form onSubmit={formik.handleSubmit}>
            {formik.values.forms.map((form,index)=>(
                <div key={index}>
                    <h3>form={index+1}</h3>
                <label htmlFor="fName" >Firstname</label>
                <input type="text" placeholder="enter fName" 
                name={`forms[${index}].fName`}
                value={form.fName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.forms && formik.touched.forms[index]?.fName && formik.errors.forms && formik.errors.forms[index]?.fName && (
                    <div>
                        {formik.errors.forms[index].fName}
                        </div>
                )}
                
                <label htmlFor="lName" >Lastname</label>
                <input type="text" placeholder="enter Lastname" name={`forms[${index}].lName`}/>
                
                <label htmlFor="name" >name</label>
                <input type="email" placeholder="enter email" 
                name={`forms[${index}].email`}/>

  {formik.values.forms.length>1 && (
        <div>
    <button type="button " onClick={()=>deleteButton(index)}>delete   </button>
        </div>
)}
                </div>              
                
                
            ))}
        <button type="button" onClick={addButton}>add</button>
        <button type="submit" >submit</button>
                </form>
                </>
    )
}

export default AddUser