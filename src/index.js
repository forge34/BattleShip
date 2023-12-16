import { DOMclass } from "./dom";
import "./style/main.css"

let p1 = document.getElementById("b1")
let p2 = document.getElementById("b2")



let dom =  new DOMclass()
dom.createBoard(p1)
dom.createBoard(p2)

p1.addEventListener("click" , (e) => {
    if(e.target.className === "cell"){
        e.target.classList.add("ship")
    }
})

p2.addEventListener("click" , (e) => {
    if(e.target.className === "cell"){
        e.target.classList.add("ship")
    }
})