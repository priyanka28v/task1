import { Navbar } from "./Navbar"
import './Demo.css'

export const Demo=()=>{
    return(
        <>
        <div>
            <Navbar/>
            <div className="head">
            <h1 className="chat">Let's Chat</h1>
            <h1 className="paragraph">Schedule a call to discuss your goals and how ButterCMS can help get there.</h1>
            </div>
            <div className="form">
                <fieldset>
                    <legend>
                        FirstName
                    </legend>
                        <input type="text" placeholder="firstname"/>
                </fieldset>
                  <fieldset>
                    <legend>
                       last name
                    </legend>
                        <input type="text" placeholder="Lastname"/>
                </fieldset>
            </div>
        </div>
        </>
    )

}