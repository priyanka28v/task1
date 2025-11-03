import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="flex flex-col md:">
        <div className="flex flex-row ml-auto mr-[90px] mt-1 gap-7">
          <Link to="/login">
            <h4 className="hover:bg-yellow-200 rounded-xl pt-2 pr-2 pl-2 pb-2 basis-2xs cursor-pointer text-xl">
              Login
            </h4>
          </Link>

          <h4 className="basis-2xs hover:bg-yellow-200 pt-2 pr-2 pl-2 pb-2 rounded-xl cursor-pointer text-xl">
            Contact
          </h4>
        </div>
        <div className="flex flex-row gap-x-4 mt-[40px]">
          <h1 className="pr-[100px] ml-[70px] text-3xl text-blue-800 italic font-serif font-bold">
            ButterCSM
          </h1>
          <p className="text-lg cursor-pointer hover:bg-yellow-200 rounded-xl">
            Product
          </p>
          <p className="text-lg cursor-pointer hover:bg-yellow-200 rounded-xl">
            Solutions
          </p>
          <p className="text-lg cursor-pointer hover:bg-yellow-200 rounded-xl">
            Developers
          </p>
          <p className="text-lg cursor-pointer hover:bg-yellow-200 rounded-xl">
            Partners
          </p>
          <p className="text-lg cursor-pointer hover:bg-yellow-200 rounded-xl">
            Resources
          </p>
          <p className="text-lg cursor-pointer hover:bg-yellow-200 rounded-xl">
            Pricing
          </p>

          <Link to="/demo">
            <button className="hover:bg-blue-600 hover:text-white rounded-lg outline-2 pt-2 pr-2 pl-2 pb-2 ml-[90px] text-blue-900 font-semibold text-lg cursor-pointer">
              Request a demo
            </button>
           </Link>

          <Link to="/signup">
            <button className="hover:bg-yellow-200 text-lg rounded-lg bg-yellow-300 border-blue-500 pt-2 pr-2 pl-2 pb-2 font-semibold outline-2 ml-5 cursor-pointer">
              Start for free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
