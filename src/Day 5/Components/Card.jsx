export const Card = ({ image, title, description, price }) => {
  return (
    <div className="md:bg-white rounded-lg md:overflow-hidden cursor-pointer md:hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{description}</p>
        <p className="text-purple-700 font-bold mt-3">${price}</p>
      </div>
    </div>
  );
};
