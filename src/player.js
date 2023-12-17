import { GameBoard } from "./board"

class Player {
    constructor(){
        this.board = new GameBoard()
        this.selected = ''
    }
}

export {Player}