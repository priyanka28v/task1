//parent component and have 2 child discription1 and discription 2

import { useContext,createContext } from "react"
import { useState } from "react";
import { Discription2 } from "./Discription2";
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
            <headingContext.Provider value={pageHeading}>
                <Discription1 />
                <Discription2 />
            </headingContext.Provider>
        </UserContext.Provider>
    </>
)
}