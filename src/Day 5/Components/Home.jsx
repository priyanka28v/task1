import { Layout } from "./Layout"
import { Body } from "./Body"
import { useRef } from "react";

export const Home=()=>{

    const fRef=useRef(null)

    function focusOnClick(){
        fRef.current.focus()
    }
    

    return(
        <>
        <Layout onFocus={focusOnClick}>
        <Body searchInput={fRef}/>
        </Layout>
        </>
    )
}