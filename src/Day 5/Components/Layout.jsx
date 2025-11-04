import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout=({children,onFocus})=>{


    
    return(
        <>
        <Header Focus={onFocus}/>
        <main >
            {children}
        </main>
        <Footer/>
        </>
    )
}