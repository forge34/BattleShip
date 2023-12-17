import { GameBoard } from "./board"

class Player {
    constructor(){
        this.board = new GameBoard()
        this.onBoard = []
        this.selected = ''
    }
}

export {Player}