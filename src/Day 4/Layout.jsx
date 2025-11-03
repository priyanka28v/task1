import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";

export const Layout=({children})=>{
    return(
        <>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </>
    )
}