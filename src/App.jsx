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
 
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Login } from "./Day 4/Components/login";
// import { Home } from "./Day 4/Components/Home";
// import {Signup} from "./Day 4/Components/Signup"
// import { Demo } from "./Day 4/Components/Demo";
// export const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//          <Route path="/signup" element={<Signup/>} />
//           <Route path="/demo" element={<Demo/>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };


// Day 5
// import {Home} from "./Day 5/Components/Home"
// export const App=()=>{
// return(
//   <>
//   <Home/>
//   </>
// )
// }

// import { Home } from "./Day 8/Components/Home";
// import { BrowserRouter,Route,Routes } from "react-router-dom";
// import { Login } from "./Day 8/Components/Login";
// import { Signup } from "./Day 8/Components/Signup";
// // import { Product } from "./Day 8/Components/Product";
// import { Protected } from "./Day 8/Components/Protected";
// import React, { Suspense } from "react";
// import ProductDetail from "./Day 8/Components/ProductDetail";

// const LazyComponent=React.lazy(()=>import("./Day 8/Components/Product"))

// export const App=()=>{
// return(
//   <>
//   <BrowserRouter>
//     <Suspense fallback={<div>loading...</div>}>
//   <Routes>
//     <Route path='/' element ={<Home/>}/>
//     <Route path="/signup" element={<Signup/>}/>
//     <Route path="/login" element={<Login/>}/>
//     <Route element={<Protected/>}>
//     <Route path='/product' element={<LazyComponent />}/>
//     <Route path="/productDetail/:id" element={<ProductDetail  />}/>
//     </Route>
//   </Routes>
//     </Suspense>
//   </BrowserRouter>
//   </>
// )
// }


//CRUD
// import Home from "../src/CRUD/Components/Home"
// import { Route,Routes,BrowserRouter } from "react-router-dom";
// import Table from "./CRUD/Components/Table";

// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/customer/list" element={<Table/>}/>
//       <Route path="/customer/update/:id" element={<Home/>}/>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

//CRUD from local storage
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Oval } from 'react-loader-spinner'

// const AddComponent=lazy(()=>import('./CrudLocalStorage/Components/Add'))
// const DisplayComponent=lazy(()=>import('./CrudLocalStorage/Components/Display'))
// const DetailComponent=lazy(()=>import('./CrudLocalStorage/Components/Detail'))
const AddComponent=lazy(()=>import('./MiniCrud/Components/Add'))

const App=()=>{
    return(
        <>
        <BrowserRouter>
        {/* <Suspense fallback={<div><Oval
            height={80}
            width={80}
            color="#4fa94d"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
                /></div>}> */}
        <Routes>
            <Route path='/' element={<AddComponent/>}/>
            {/* <Route path='/display' element={<DisplayComponent/>}/>
            <Route path='/update/:id' element={<AddComponent/>}/>
            <Route path='/detail/:id' element={<DetailComponent/>}/> */}
        </Routes>
        {/* </Suspense> */}
        </BrowserRouter>
        </>
    )
}

export default App;
