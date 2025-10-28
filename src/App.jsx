
import { Navbar } from './components/navbar'
import { Image } from './components/images';
import { Body } from './components/body';
import { Footer } from './components/footer';

function App(){
    return(
<>
<div className='bg-teal-700'>
<Navbar/>
<Image/>
<Body/>
<Footer/>
</div>
</>
    )
}

export default App;
