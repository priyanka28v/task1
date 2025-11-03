import icon from "../../assets/icon.svg"

export const Footer=()=>{
    const array1=["Headless" ,"Capabilities","Features","Integrations","API"]
    const array2=["Knowledge Base","Developer Docs","API Documentation","Developer Hub","Starter Projects","API Status"]
    const array3=["Pricing","Partners","Security","Careers","Contact Us"]
    const array4=["Blog","Podcast","WordPress Alternative","Contentful Alternative"," Medium Alternative","Strapi Alternative"]
return(
    <>
    <div className="flex flex-row gap-8 p-8 justify-around">
        <img src={icon}  className="mt-8 w-3xs"/>
        <div className="gap-y-4">
        <ul >
            <li className="text-blue-900 font-bold ml-7">Product</li>
            {array1.map((info,index)=>(
                <li key={index} className="font-bold m-7 cursor-pointer hover:text-blue-900 hover:underline">{info}</li>
            ))}
        </ul>
        </div>
        <div>
         <ul>
            <li className="text-blue-900 font-bold ml-7">Developers</li>
            {array2.map((info,index)=>(
                <li key={index}  className="font-bold m-7 cursor-pointer hover:text-blue-900 hover:underline">{info}</li>
            ))}
        </ul>
        </div>
        <div>
         <ul>
            <li className="text-blue-900 font-bold ml-7">Explore</li>
            {array3.map((info,index)=>(
                <li key={index}  className="font-bold m-7 cursor-pointer hover:text-blue-900 hover:underline">{info}</li>
            ))}
        </ul>
        </div>
        <div>
         <ul>
            <li className="text-blue-900 font-bold ml-7">Resources</li>
            {array4.map((info,index)=>(
                <li key={index}  className="font-bold m-7 cursor-pointer hover:text-blue-900 hover:underline">{info}</li>
            ))}
        </ul>
        </div>
    </div>
    </>
)
}