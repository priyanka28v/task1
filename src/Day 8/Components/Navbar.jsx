import { Login } from "./Login";
import { Signup } from "./Signup";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate=useNavigate()

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 md:px-8">
          
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900 cursor-pointer hover:text-blue-700 transition-all duration-300">
            Shopping App
          </h1>

          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 md:mt-0 text-lg font-medium text-gray-700">
            <li className="hover:text-blue-900 hover:underline underline-offset-4 cursor-pointer transition-all duration-200">
              Home
            </li>
            <li className="hover:text-blue-900 hover:underline underline-offset-4 cursor-pointer transition-all duration-200">
              Products
            </li>
            <li className="hover:text-blue-900 hover:underline underline-offset-4 cursor-pointer transition-all duration-200">
              About
            </li>
          </ul>

          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              // onClick={()=>navigate('/login')}
              className="px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-md"
            >
              Login
            </button>
            <button
              // onClick={()=>navigate('/signup')}
              className="px-4 py-2 text-blue-700 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md"
            >
              Signup
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
