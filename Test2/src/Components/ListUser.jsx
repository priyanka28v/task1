
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom"

export const ListUser=()=>{

    const navigate=useNavigate()

    const [data,setData]=useState([])

    useEffect(()=>{
        const listData=JSON.parse(sessionStorage.getItem('users'))
        setData(listData)
    },[])
    const tableData=data.userForms
    console.log(tableData)
    return(
    <>
    <h1 className="place-self-center text-2xl font-bold text-blue-700 m-5 outline-2 p-4 rounded-2xl bg-blue-200">All users</h1>
    <button type="button" className="place-self-end text-3xl rounded-xl outline-2 border-black p-4 m-4 bg-teal-600  text-white font-bold cursor-pointer " onClick={()=>navigate('/')}>Add</button>
    <table className="  table-fixed place-self-center  text-xl  m-8  text-green-600 font-medium outline-2">
        <thead>
            <tr className=" flex  flex-row gap-[22vh] text-xl  m-8  text-green-600 font-medium">
                <th>
                fullname
                </th>
             <th>
                email
             </th>
            <th>
                contact
            </th>
            <th>
                skills
            </th>
            <th>
                discription
                </th>
        </tr>
             </thead>
        <tbody className="outline-2">
            
        {tableData?.map((user,index)=>(
                <tr key={index} className="  m-2 flex  flex-row gap-[22vh] text-xl text-pink-600 font-medium">
                    <td >{user.fullName}</td>
                    <td>{user.email}</td>
                      <td>{user.contact}</td>
                        <td>{user.skills.value}</td>
                          <td dangerouslySetInnerHTML={{__html:user.discription}}></td>
        
                </tr>
                ))}
        </tbody>
    </table>
    </>
    )
}