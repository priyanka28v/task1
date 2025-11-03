// day 1

// import { Navbar } from './components/navbar'
// import { Image } from './components/images';
// import { Body } from './components/body';
// import { Footer } from './components/footer';

// function App(){
//     return(
// <>
// <div className='bg-teal-700'>
// <Navbar/>
// <Image/>
// <Body/>
// <Footer/>
// </div>
// </>
//     )
// }

// day 2

// import { Home } from "./Day2/Components/Home";
// import { Discription } from "./Day2/Components/Discription";
// import { Cards } from "./Day2/Components/Cards";

// function App(){
//     return(
//     <>
//     <div className=" bg-purple-200">
//         {/* <Home/>      */}
//           <Discription/>
//           {/* <Cards />  */}

//     </div>
//     </>
//     )
// } 

//day3

// import { Home } from "../src/Day3/components/Home"

// export function App(){
//     return(
//         <>
//         <Home/>
//         </>
//     )
// }

//Day 4
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Day 4/Components/login";
import { Home } from "./Day 4/Components/Home";
import {Signup} from "./Day 4/Components/Signup"
import { Demo } from "./Day 4/Components/Demo";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup/>} />
          <Route path="/demo" element={<Demo/>} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
