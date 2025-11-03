import image from "../assets/image.png"
import con from "../assets/con.png"
import cons from "../assets/cons.jpg"

export function Image(){
    return(
        <>
        <div className="grid grid-cols-3 gap-4  mt-7">
        <img src={image} className=" pt-7 pl-7 object-position: center   max-h-[320px]  object-cover  " />
        <img src={con} className=" pt-7 pl-7 mb-3 object-position: center   max-h-[320px]  object-cover  " />
        <img src={cons} className=" pt-7 pl-7 pr-6 object-position: center max-h-[320px]  object-cover  " />
        
                    </div>
        </>
    )
}