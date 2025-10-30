import { useState } from "react";
import { useEffect } from "react";


export function Cards({ images = [], imageData }) {

  const [hoveredIndex, setHoveredIndex] = useState(false);
//   const [msg,setMsg]=useState(null)

//   useEffect(()=>{
//     setTimeout(() => {
//                 setMsg(true)
//             }, 3000);

//       },hoveredIndex)

  return (
    <>
      <div className="flex flex-row">
        <ul className="pt-6 mb-7 grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <li 
              className="basis-64 mt-7 ml-4 relative" 
              key={index}
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}  
            >
              <img 
                className="h-80 bg-black pt-5 pr-5 cursor-pointer w-auto rounded-3xl"
                src={image.Img}
              />
              
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 text-white flex items-center justify-center rounded-3xl">
                  <ul>
                    {/* {imageData.map((cartoonData, imageIndex) => (
                      <li key={imageIndex}> */}
                        <h1>Hi...{imageData[index].myName}.{imageData[index].cartoonName} here.</h1>
                      {/* </li>
                    ))} */}
                  </ul>
                </div>

              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
