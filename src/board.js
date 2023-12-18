import { Ship } from "./ship"
import { letters } from "./helper"

class GameBoard {

    constructor() {
        this.board = {}
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j <= 10; j++) {
                this.board[`${letters[i]}${j}`] = { missed: false, hit: false, ship: null }
            }
        }
        this.onBoard = []
        this.shipCount = 0;
    }

    boardData(key) {
        return this.board[key]
    }

    alreadyOnBoard(ship){
        if(this.onBoard.includes(ship)){
            return true
        }else return false
    }

    addOnBoard(ship){
        this.onBoard.push(ship)
    }

    placeShip(pos, type) {
        let ship = new Ship(type)

        this.shipCount++

        for (let i = 0; i < ship.length; i++) {
            if ((Number(pos[1])) < 11) {
                this.board[`${pos[0]}${Number(pos[1])+i}`].ship = ship;
            }
        }
        this.onBoard.push(type)
    }

    hasShip(pos) {
        if (this.boardData(pos).ship) {
            return true
        } else return false
    }

    recieveHit(pos) {
        let b = this.boardData(pos)
        if (b.ship && !b.hit) {
            b.hit = true
            b.ship.hit()

            if (b.ship.isSunk()) {
                this.shipCount--
            }
        } else b.missed = true

    }

    isAllSunk() {
        if (this.shipCount === 0) return true;
    }
}

export { GameBoard }