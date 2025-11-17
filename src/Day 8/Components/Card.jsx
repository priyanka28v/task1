import { useNavigate } from "react-router-dom";

export const Card = ({ products }) => {
  const info = products.description;
  const id = products.id;
  console.log(id)
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between md:rounded-xl md:border-2 md:border-indigo-500 shadow-md md:w-80 bg-white hover:shadow-2xl overflow-hidden">
   
      <div className="w-full h-60 bg-cyan-50 flex items-center justify-center overflow-hidden cursor-pointer">
        {products?.image ? (
          <img
            src={products.image}
            alt={products.title}
            className="w-full h-full object-contain object-center"
            onClick={() => navigate(`/productDetail/${id}`)}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            No image available
          </div>
        )}
      </div>

      <div className="flex flex-col flex-grow p-4 text-center justify-between">
        <div>
          <p className="text-lg font-semibold text-gray-800 truncate">
            {products.title}
          </p>

          <p className="text-md font-medium text-gray-700 mt-2">
            <span className="text-red-500 font-semibold">Price:</span> ${products.price}
          </p>

          <p className="text-sm text-gray-600 mt-3 line-clamp-3">
            {info ? info.substring(0, 120) + "..." : "No description"}
          </p>
        </div>
      </div>
    </div>
  );
};
