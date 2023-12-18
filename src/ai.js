import { Player } from "./player";
import { Type } from "./helper";
import { random } from "./helper";
import { letters } from "./helper";

let availableShips = Array.from(Object.keys(Type))


class Ai extends Player {
    constructor(){
        super()
    }

    place(){
        for(let i=0;i<5;i++){
            this.board.placeShip(`${letters[random(0,9)]}${random(1,7)}` , availableShips[i])
        }
    }

    hit(pos){
        this.board.recieveHit()
    }
}

export {Ai}