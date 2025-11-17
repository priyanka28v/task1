import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("userData"));
    if (users && id) {
      const user = users.find((user) => user.id === id);
      if (user) setUserInfo(user);
    }
  }, [id]);

  return (
    <>
      {userInfo && (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
              User Details
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>First Name:</strong> {userInfo.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {userInfo.lastName}
              </p>
              <p>
                <strong>Email:</strong> {userInfo.email}
              </p>
              <p>
                <strong>Phone:</strong> {userInfo.phone}
              </p>
              <p>
                <strong>Address:</strong> {userInfo.address}
              </p>
              <p>
                <strong>Bio:</strong> {userInfo.bio}
              </p>
              <p>
                <strong>Hobbies:</strong> {userInfo.hobbies}
              </p>
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="button"
                className="px-5 py-2 text-sm font-semibold rounded bg-cyan-950 text-white hover:bg-cyan-900 transition-all"
                onClick={() => navigate("/display")}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
