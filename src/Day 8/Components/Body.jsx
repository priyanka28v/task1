import shoping from "../../assets/shoping.jpg";
import { Layout } from "./Layout";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import 'sweetalert2/src/sweetalert2.scss'

export const Body = () => {

    const navigate=useNavigate()

    const loginAlert=()=>{
        withReactContent(Swal).fire({
          title:<i>please login first</i>,
          confirmButtonText:"login"
        })
        .then((result)=>{
          if(result.isConfirmed){ 
            navigate("/login")
          }
        })
      }

  return (
    <Layout>
      <div
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${shoping})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Shop
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Find the best products at unbeatable prices
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          onClick={loginAlert}>
            Shop Now
          </button>
        </div>
      </div>
    </Layout>
  );
};
