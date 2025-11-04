import { useState } from "react"
import { SellorImages } from "./SellorImages"

export const Sellors =()=>{

    const [seeImages,setSeeImages]=useState(false)
    
    function toogle(){
        setSeeImages(!seeImages)
    }

return(
    <>
    <div>
    <div className="md:mt-[80px] md:ml-[70px]">
    <h3 className="md:mb-[20px] md:text-2xl md:font:bold">1. Ruth Ozeki</h3>
    <p className="md:italic">“Ruth Ozeki is a novelist, filmmaker and Zen Buddhist priest. She is the author of three novels: My Year of Meats, All Over Creation and A Tale for the Time Being, which was shortlisted for the 2013 Man Booker Prize and translated into 28 languages. She has also written a short memoir, The Face: A Time Code. She is affiliated with the Everyday Zen Foundation and lives in Northampton, Massachusetts, where she teaches creative writing at Smith College and is the Grace Jarcho Ross 1933 Professor of Humanities.........”</p>
    </div>
    {seeImages ? (
        <>
        <button className="md:place-self-center md:ml-[600px] md:mt-[40px] md:rounded-lg md:font-bold md:cursor-pointer md:hover:bg-green-900  md:bg-black md:text-white md:p-5" onClick={toogle} >see Less...</button>
        <SellorImages/>
        </>
    ):(
        <button className="md:place-self-center md:ml-[600px] md:mt-[40px] md:rounded-lg md:font-bold md:cursor-pointer md:hover:bg-green-900  md:bg-black md:text-white md:p-5" onClick={toogle} >see more...</button>
            )}

    </div>
    </>
)
}