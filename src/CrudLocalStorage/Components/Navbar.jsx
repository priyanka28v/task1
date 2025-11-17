import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ click, change, value }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-black flex flex-row items-center p-4">
      <h1 className="font-bold text-3xl text-white flex-grow">Users Management</h1>

      <button
        type="button"
        className="rounded-xl text-2xl px-4 py-2 cursor-pointer text-cyan-400 border border-cyan-400 hover:bg-cyan-600 hover:text-white transition"
        onClick={() => navigate("/")}
      >
        Add User
      </button>

      <input
        className="rounded-xl border border-purple-500 h-10 ml-8 p-4 w-64 bg-white text-black"
        type="text"
        placeholder="Search..."
        onChange={change}     
        value={value}
      />

      <button
        type="button"
        onClick={click}
        className="rounded-xl text-white bg-purple-600 hover:bg-purple-700 ml-4 px-4 py-2"
      >
        Search
      </button>
    </div>
  );
};

export default Navbar;
