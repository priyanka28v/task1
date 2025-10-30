
  import { useContext } from "react"
import { Discription, UserContext} from "./Discription"
import { Discription1 } from "./discription1"
  
  export function Discription2 ({}){

    const userData=useContext(UserContext)

    return(
        <>
        {/* <Discription/> */}
        <div className="w-xl text-4xl w-full 
font-style: normal border-purple-500 outline-2  outline-pink-500 place-self-center rounded-xl ml-1 mr-1 mb-2 pt-2 pr-1 pl-1 pb-2 ">
                <h1 className=" place-self-center font-serif">hello,my name is {userData.myName}.I recently join here as a {userData.designation} trainee</h1> 
                 {/* <Cards images={cartoon} />                                                            */}
      <Discription1/>
            </div>
        </>
    )
}