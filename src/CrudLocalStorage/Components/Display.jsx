import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 3;

const Display = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchValue,setSearchValue]=useState("")

   useEffect(() => {
  const storedData = localStorage.getItem("userData");
  if (storedData) {
    try {
      const data = JSON.parse(storedData);
      if (data) {
        const sortedData = [...data].sort((a, b) =>
          a.firstName?.toLowerCase().localeCompare(b.firstName?.toLowerCase())
        );
        setTableData(sortedData);
      } else {
        console.error("userData in localStorage is not an array");
      }
    } catch (error) {
      console.error("Error parsing userData from localStorage:", error);
    }
  }
}, [])


  const popup=(pop)=>{
      Swal.fire({
      title: pop===true?"User deleted successfully": "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    })
    return isConfirmed;
  }
  const handleDelete = async (userId) => {

    const status=false;
    popup(status)

    if (isConfirmed) {
      const updatedUsers = tableData.filter((user) => user.id !== userId);
      const status=true;
      popup(status)

      setTableData(updatedUsers);
      localStorage.setItem("userData", JSON.stringify(updatedUsers));
    }
  };

  const pageCount = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const start = currentPage * ITEMS_PER_PAGE;
  const currentItems = tableData.slice(start, start + ITEMS_PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

    const searchTerm=(e)=>{
      setSearchValue(e.target.value)
    }

  const handleSearch=()=>{
    if(searchValue!=""){
      const filterBySearch=tableData.filter((data)=>{
        if(data.firstName.toLowerCase().includes(searchValue.toLowerCase()))
        {return data.firstName}
      })
      setTableData(filterBySearch)
    }
  }
  // console.log(tableData)
  return (
    <>
     <Navbar click={handleSearch} change={searchTerm}  value={searchValue}/>

      <div className="p-7">
        <table className="border border-black divide-y divide-gray-200 m-8">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm font-medium text-gray-700">
              <th className="p-4">Firstname</th>
              <th className="p-4">Lastname</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone</th>
              <th className="p-4">Bio</th>
              <th className="p-4">Address</th>
              <th className="p-4">Hobbies</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors text-sm text-gray-800"
              >
                <td className="p-4">{user.firstName}</td>
                <td className="p-4">{user.lastName}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">{user.phone}</td>
                <td className="p-4" dangerouslySetInnerHTML={{__html: user.bio}}></td>
                <td className="p-4">{user.address}</td>
                <td className="p-4">{user.hobbies}</td>
                <td className="p-4 flex gap-2">
                  <button
                    className="p-2 text-sm font-bold rounded bg-yellow-500 text-white"
                    onClick={() => navigate(`/detail/${user.id}`)}
                  >
                    View
                  </button>
                  <button
                    className="p-2 text-sm font-bold rounded bg-green-500 text-white"
                    onClick={() => navigate(`/update/${user.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="p-2 text-sm font-bold rounded bg-red-500 text-white"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {pageCount > 1 && (
          <div className="flex justify-center mt-5">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next>"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="previous"
              renderOnZeroPageCount={null}
              containerClassName="flex gap-2"
              activeClassName="bg-blue-500 text-white px-3 py-1 rounded"
              pageClassName="px-3 py-1 border rounded"
              previousClassName="px-3 py-1 border rounded"
              nextClassName="px-3 py-1 border rounded"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Display;
