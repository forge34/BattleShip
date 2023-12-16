import { Ship } from "./ship"

let l = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

class GameBoard {

    constructor() {
        this.board = {}
        for (let i = 0; i < 10; i++) {
            for (let j = 1; j <= 10; j++) {
                this.board[`${l[i]}${j}`] = { missed: false, hit: false, ship: null }
            }
        }
        this.shipCount = 0;
    }

    boardData(key) {
        return this.board[key]
    }

    placeShip(posx, posy, type) {
        let ship = new Ship(type)

        this.shipCount++

        for (let i = 0; i < ship.length; i++) {
            this.board[`${posx}${posy + i}`].ship = ship;
        }
    }

    recieveHit(posx, posy) {
        let b = this.board[`${posx}${posy}`]
        if (b.ship && !b.hit) {
            b.hit = true
            b.ship.hit()

            if (b.ship.isSunk()) {
                this.shipCount--
            }
        } else b.missed = true

    }

    checkAll() {
    }
}

export { GameBoard }