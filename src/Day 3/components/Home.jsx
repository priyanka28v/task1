import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import sadImage from "../../assets/sad image1.png";

import { useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);
  const [showName, setShowName] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [userName, setUserName] = useState("");
  const [colorIndex, setColorIndex] = useState(0);
  const [mouseEnter, setMouseEnter] = useState(false);
  const [keyDown, setKeyDown] = useState(false);

  const images = [image1, image2, image3, image4, image5, image6];
  const names = [
    "Hii... I'm Panda ",
    "Hii... I'm Tom and Jerry",
    "Hii... I'm Preety Girl ",
    "Hii... I'm ShinCha",
    "Hii... I'm Krishna",
    "Hii... I'm Pikachu",
  ];

  const colors = [
    "#e79e9eff",
    "#ddcf95ff",
    "#6BCB77",
    "#4D96FF",
    "#C77DFF",
    "#FF9F1C",
    "#00B4D8",
    "#F15BB5",
    "#9B5DE5",
    "#FFBF69",
  ];

  function handleClick() {
    setShowName(false);
    setCount((prev) => (prev + 1) % images.length);
  }

  function handleMouseLeave() {
    setShowName(true);
  }

  function handleFocus() {
    setBgColor("#E0BBE4");
  }

  function handleBlur() {
    setBgColor("#ce8352ff");
  }

  function handleTextMouseEnter() {
    setMouseEnter(!mouseEnter);
  }

  function handleChange(e) {
    setUserName(e.target.value);
    setBgColor(colors[colorIndex]);
    setColorIndex((prevIndex) => (prevIndex + 1) ); 
  }

  function handelSubmit() {
    alert("your form has been submitted");
  }

  function handelKeyDown(e) {
    e.preventDefault()
    setKeyDown(true);
  }

  function handelKeyUp() {
    setKeyDown(false);
  }

  return (
    <div
      className="place-self-center flex flex-col justify-center items-center gap-4 w-full h-screen transition-all duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <button
        type="button"
        className="rounded-xl bg-fuchsia-200 pt-2 pr-4 pb-2 pl-4 hover:bg-fuchsia-300 transition-all"
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      >
        hey.. click me
      </button>

      <img
        src={images[count]}
        className="w-48 h-48 object-contain transition-all duration-500"
      />

      <input
        type="text"
        className="bg-green-200 pt-4 pb-4 pr-4 pl-4 rounded-xl text-2xl font-serif italic font-semibold decoration-emerald-400 decoration-double decoration-1 text-center"
        placeholder="press any key"
        onKeyDown={handelKeyDown}
        onKeyUp={handelKeyUp}
      />
      {keyDown && (
        <img
          src={sadImage}
          className="w-48 h-48 object-contain transition-all duration-500"
        />
      )}

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          className="bg-red-200 pt-4 pb-4 pr-4 pl-4 rounded-xl text-2xl font-serif italic font-semibold decoration-emerald-400 decoration-double decoration-1 text-center no-underline hover:underline"
          placeholder="hey.. enter your name please"
          value={userName}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button className="ml-8 rounded-xl italic border-indigo-500 border-2 pl-5 pr-5" type="submit">
          Submit
        </button>
      </form>

      {showName ? (
        <>
          <h1
            className="text-lg font-semibold"
            onMouseEnter={handleTextMouseEnter}
          >
            {names[count]}
          </h1>
          {mouseEnter && (
            <div>
              <h1 className="font-serif text-4xl ml-5 mr-5 italic">
                A cartoon is a type of visual art that is typically drawn,
                frequently animated, in an unrealistic or semi-realistic style.
                The specific meaning has evolved, but the modern usage usually
                refers to either: an image or series of images intended for satire,
                caricature, or humor; or a motion picture that relies on a sequence
                of illustrations for its animation. Someone who creates cartoons in
                the first sense is called a cartoonist,[1] and in the second sense
                they are usually called an animator.
              </h1>
            </div>
          )}
        </>
      ) : (
        <h1 className="text-gray-500">(move the mouse down to see my name)</h1>
      )}
    </div>
    // {keyDown && (
    //     <img
    //       src={sadImage}
    //       className="w-48 h-48 object-contain transition-all duration-500"
    //     />
    //   )}
  );
}
