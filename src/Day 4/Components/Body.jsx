import reactImage from '../../assets/reactImage.webp'
import { Content } from './Content'

export const Body=()=>{
    return(
        <>
        <div className='flex flex-row'>
    <h1 className="text-6xl mt-[180px] text-blue-700 ml-[70px] font-bold ">How to Build Reusable Components Using React</h1>
    <img className=" w-xl h-96 mt-[70px] mr-[60px] rounded-4xl" src={reactImage}/>
        </div>
        <div className='mt-[80px] ml-[40px]'>
            <Content/>
        </div>
    </>
    )
}