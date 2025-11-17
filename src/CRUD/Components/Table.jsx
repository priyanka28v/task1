import { Api } from "../Networking/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Table = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "/customer/list";
        const result = await Api(url, {}, "get");
        const fetchedUsers = result.data.data.data;
        setUserData(fetchedUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    const result = await Swal.fire({
      title: "Are you sure you want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        const url = `/customer/delete?id=${userId}`;
        await Api(url, {}, "delete");
        const deletedUser=userData.filter((user) => user._id !== userId)
        setUserData(deletedUser);

        Swal.fire({
          title: "Deleted!",
          text: "User deleted successfully.",
          icon: "success",
        });
      } catch (err) {
        console.error(err);
              }
    }
  };

  return (
    <div className="p-7">
      <table className="min-w-full border border-black divide-y divide-gray-200 m-8 ">
        <thead className="bg-gray-100">
          <tr className="text-left text-sm font-medium text-gray-700">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
            <th className="p-4">Address</th>
            <th className="p-4">State</th>
            <th className="p-4">ZipCode</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.map((user) => (
            <tr
              key={user._id}
              className="hover:bg-gray-50 transition-colors text-sm text-gray-800"
            >
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.phone}</td>
              <td className="p-4">{user.address}</td>
              <td className="p-4">{user.state}</td>
              <td className="p-4">{user.zipCode}</td>
              <td className="p-4 flex gap-2">
                <button
                  type="button"
                  className="p-2 text-sm font-bold rounded bg-green-500 text-white"
                  onClick={() => navigate(`/customer/update/${user._id}`)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="p-2 text-sm font-bold rounded bg-red-500 text-white"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
