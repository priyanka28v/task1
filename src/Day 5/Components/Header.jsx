import product from "../../assets/product.webp"
import { useRef } from "react"
import { useState } from "react"

export const Header=({Focus})=>{
    
    return(
    <>
    <div >
        <ul className=" md:flex flex-row gap-[10vh] mt-[60px] ">
            <li className="ml-auto mb-[10px] md:text-green-600 md:ml-[200px] md:font-bold md:text-2xl md:rounded-xl md:p-1 md:hover:text-blue-700 md:hover:bg-green-300 md:cursor-pointer"> Product Store</li>
            <div className="hidden md:flex flex-row gap-[10vh] text-xl">
            <li className=" cursor-pointer hover:text-red-600">Webinars </li>
            <li className=" cursor-pointer hover:text-red-600">Products</li>
            <li className=" cursor-pointer hover:text-red-600">blogs</li>
            <li className=" cursor-pointer hover:text-red-600" onClick={Focus}>Search</li>
            </div>
            <button className=" ml-[280px] font-semibold bg-blue-700 rounded-xl p-2 text-white  md:text-white md:bg-blue-700 md:rounded-xl md:p-1 md:cursor-pointer md:hover:bg-blue-900 md:font-bold md:ml-[100px] md:mr[90px]">Try UXPin</button>
        </ul>
        <hr className="mt-[20px]"></hr>
    </div>
    </>
    )
}