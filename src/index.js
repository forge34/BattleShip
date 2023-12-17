import { GameBoard } from "./board";
import { DOMclass } from "./dom";
import "./style/main.css"

const MainLoop = (() => {
    let b1 = document.getElementById("b1") 
    let b2 = document.getElementById("b2")
    let Dom = new DOMclass()
    let board1 = new GameBoard()
    let board2 = new GameBoard()

    const Setup = () => {
        Dom.createBoard(b1)
        Dom.createBoard(b2)
    }

    return {
        Setup
    }

})();


MainLoop.Setup()