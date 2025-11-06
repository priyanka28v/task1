import { useState, useRef } from "react";

// import { useReactToPrint } from "react-to-print";
// import ReactToPrint from 'react-to-print';

export const Profile = () => {
  const data = JSON.parse(localStorage.getItem("userdata"));
  const [user] = useState(data); 

  const printRef = useRef(null); 

  const handlePrint = () => {
    if (printRef.current) {
      const content = printRef.current.innerHTML;

      const printWindow = window.open('', '', 'height=600,width=800');

      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(content);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl text-gray-700 font-semibold">
           No user data found. Please add your details 
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex flex-col items-center pt-[180px] px-5">
      {/* Assign the ref to the div you want to print */}
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full text-center duration-300" ref={printRef}>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Welcome {user.name}</h1>
        <p className="text-pink-600 font-medium">My contact Details are :{user.contact}</p>
        <p className="text-gray-600 mt-4">I had done my {user.course.value} with {user.course.label}</p>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700">My intro are:</h2>
          <div className="flex flex-wrap justify-center gap-2 mt-2"
          dangerouslySetInnerHTML= {{__html:user.quill}}>
          </div>
        </div>

        <div className="mt-3 text-gray-500 text-sm">
           For more details contact:  {user.email}
        </div>
      </div>
       <button onClick={handlePrint} className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Print Profile
       </button>
    </div>
  );
};
