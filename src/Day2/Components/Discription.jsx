//parent component and have 2 child discription1 and discription 2

import { useContext,createContext } from "react"
import { useState } from "react";
import { Discription2 } from "./Discription2";

export const UserContext = createContext();

export function Discription(){
    
    const person={
        myName:"priyanka",
        designation:"reactjs",
        age:22
    }
    const [user,setUser]=useState(person)
return(
    <>
    <UserContext.Provider value={user}>
        <Discription2/>
    </UserContext.Provider>
    <h1>Here we will see the various cartoons characters</h1>
    </>
)
}