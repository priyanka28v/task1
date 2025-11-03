import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Layout } from "../Layout";

export const Login = () => {
  return (
    <>
      <div>
    <Layout>

        <div className="flex flex-col mt-5 pt-24 pb-24 bg-blue-950 items-center">
          <h1 className="text-white text-5xl font-semibold mb-8">LOGIN</h1>

          <div className="flex flex-col items-center justify-center gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 w-full rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer font-bold bg-yellow-300 mt-8 w-full max-w-md text-black py-2 rounded hover:bg-yellow-400"
          >
            Login
          </button>

          <div className="mt-10 text-center">
            <h4 className="text-white cursor-pointer">
              Don't have an account?{" "}
              <Link to='/signup'>
              <span className="text-yellow-300 font-bold">Sign Up</span>
              </Link>
            </h4>
            <h4 className="font-bold text-yellow-300 mt-3 cursor-pointer">
              I forgot my password.
            </h4>
          </div>

          <hr className="mt-8 w-full max-w-md border-yellow-200" />

          <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-md">
         
            <button
              type="button"
              className="flex items-center justify-center gap-2 cursor-pointer font-bold bg-white w-full text-black py-2 rounded hover:bg-yellow-400"
            >
              <FaGoogle size={20} />
              Login with Google
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 cursor-pointer font-bold bg-white w-full text-black py-2 rounded hover:bg-yellow-400"
            >
              <FaGithub size={20} />
              Login with GitHub
            </button>
          </div>
        </div>
              </Layout>
      </div>
    </>
  );
};
