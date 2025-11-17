// import shoping from "../../assets/shoping.jpg";
import { Layout } from "./Layout";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card";
import fetchApi from "../Components/fetching/Api"

export default function Product () {

    const [data,setData]=useState([])

            useEffect(()=>{
                const fetchData=async()=>{
                    const result=await fetchApi(
                      {url:'https://fakestoreapi.com/products',payload:null,method:GET}
                    )

                    setData(result)
                    console.log(result)
                }
                fetchData()
        },[])

  return (
    <>
      <Layout>
        <div
          className="relative w-full  bg-[url('../../assets/shoping.jpg')] bg-cover bg-center bg-no-repeat md:bg-sky-950"
        >
            <h1>products</h1>

    <div className="md:m-6">
        {data?(
            <div className="md:grid grid-cols-3 gap-4 gap-y-[10vh] md:object-cover md:object-contain ">
                {data ?.map((product,index)=>(
                    <Card products={product} key={index}/>
                ))}
                </div>
        ):(
            <div>
                <h1>no more products</h1>
                </div>
        )}

    </div>
        </div>

      </Layout>
    </>
  );
};
