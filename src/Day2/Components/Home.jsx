
import { useEffect } from "react"
import { useState } from "react"
import { Cards } from "./Cards"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"
// import image7 from "../../assets/image7.jpg"
import { Discription } from "./Discription"
// import { Cards } from "./Cards"


export function Home() {

    const [msg, setMsg] = useState(true)

    useEffect(() => {
        // console.log("inside use")
        setTimeout(() => {
            console.log("imkmmn")
            setMsg(false)
        }, 3000);

    }, [msg])

    const cartoon = [{
        key: 1,
        Img: image1
    },
    {
        key: 2,
        Img: image2
    },
    {
        key: 3,
        Img: image3
    },
    {
        key: 4,
        Img: image4
    },
    {
        key: 5,
        Img: image5
    },
    {
        key: 6,
        Img: image6
    }
    ]
    const data = [
        {
            myName: "priyanka",
            cartoonName: "panda"
        },
        {
            myName: "shiv",
            cartoonName: "Tom and jerry"
        },
        {
            myName: "yashi",
            cartoonName: "Preety girl"
        },
        {
            myName: "khushi",
            cartoonName: "Shinchan"
        },
        {
            myName: "mehak",
            cartoonName: "krishna"
        },
        {
            myName: "ajay",
            cartoonName: "pikachuu"
        }
    ]

    return (
        <>
            {console.log(setMsg)}
            {msg ? (
                <div className="flex h-screen items-center justify-center">
                    <h1 className="place-self-center font-serif text-8xl text-lime-600 text-center v">hii..welcome to my page</h1>
                    {/* <img className="h-24 rounded-3xl ml-8" src={image7} /> */}
                </div>
            ) : (

                <div className=" bg-purple-200" >
                    <Discription  />
                    <Cards images={cartoon} imageData={data} />
                </div>
            )}
        </>

    )
}