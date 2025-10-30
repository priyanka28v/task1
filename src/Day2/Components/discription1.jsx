import { useContext } from "react"
import {headingContext} from './Discription'

export function Discription1(){

    const heading =useContext(headingContext)

    return(
        <>
        <h1>{heading}</h1>
        <h1>A cartoon is a type of visual art that is typically drawn, frequently animated, in an unrealistic or semi-realistic style. The specific meaning has evolved, but the modern usage usually refers to either: an image or series of images intended for satire, caricature, or humor; or a motion picture that relies on a sequence of illustrations for its animation. Someone who creates cartoons in the first sense is called a cartoonist
            ,[1] and in the second sense they are usually called an animator.</h1>
        </>
    )
}