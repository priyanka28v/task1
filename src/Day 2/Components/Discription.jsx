//parent component and have 2 child discription1 and discription 2

import { useContext,createContext } from "react"
import { useState } from "react";
import { Discription1 } from "./discription1";

export const UserContext = createContext();
export const headingContext=createContext()

export function Discription(){
    const [user,setUser]=useState({
        myName:"priyanka",
        designation:"reactjs",
        age:22
    })
    const pageHeading = "Here we will see the various cartoons characters";

return(
    <>
     <UserContext.Provider value={user}>
            <Discription1/>
        </UserContext.Provider>
        <h1>hello...</h1>
    </>
)
}