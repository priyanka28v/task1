import { useContext } from "react";
import { SellorContext } from "./Body";

export const SellorImages = () => {
  const sellors = useContext(SellorContext); 

  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {sellors.map((s, index) => (
        <img
          key={index}
          src={s.img}
          alt={s.name}
          className="w-32 h-32 object-cover rounded-full"
        />
      ))}
    </div>
  );
};
