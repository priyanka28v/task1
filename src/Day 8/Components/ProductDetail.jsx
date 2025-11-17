import { useParams } from "react-router-dom";
import { Layout } from "./Layout";
import { useEffect, useState } from "react";
// import axios from "axios";
import fetchApi from "./fetching/Api";

  const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      
  console.log("Fetching product with ID:", id);


  useEffect(() => {
    const apiData = async () => {
      setLoading(true); 
      setError(null);

      try {
        const result = await fetchApi(
         {url:"https://fakestoreapi.com/products",payload:{id}}
        );
        
        setData(result);   
      } catch (err) {
        console.log(err);
        setError("Failed to load product");  
      } finally {
        setLoading(false);  
      }
    };

    apiData();
  }, [id]); 

  return (
    <Layout>
      {loading ? (
        <p className="text-center text-gray-500 mt-10">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 mt-10">{error}</p>
      ) : data ? (
        <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
          {data.image && data.image.length > 0 && (
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-contain object-center rounded-lg shadow-md"
            />
          )}
          <div className="flex-1 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-gray-800">{data.title}</h2>
            <p className="text-gray-600">{data.description}</p>
            <p className="text-xl font-bold text-blue-600 mt-2">${data.price}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">Product not found</p>
      )}
    </Layout>
  );
};

export default ProductDetail