import React from "react"
import "./CustomMouse.css"
import img from "./redmouse.png"


export function CustomMouse() {
    
    const cursorRef:any = React.useRef(null)

    function renderMouse(event:any) {
        const { clientX, clientY } = event;
        console.log(event);
        
        const mouseX = clientX - 6
        const mouseY = clientY - 2
        cursorRef.current.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px,0)"
    }

    function HideMouse(event:any) {
        const { clientX, clientY } = event;
        const mouseX = clientX - 999
        const mouseY = clientY - 999
        cursorRef.current.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px,0)"
    }

    React.useEffect(() => {
        
        
        document.addEventListener("mousemove", renderMouse)
        document.addEventListener("mouseleave", HideMouse)

    })

    return (
        <img id="cursor" src={img} alt="" ref={cursorRef}></img>
    )
}