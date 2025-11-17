import {AddUser} from "./Components/AddUser"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import { ListUser } from "./Components/ListUser"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddUser/>}/>
       <Route path='/list' element={<ListUser/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
