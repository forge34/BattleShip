import { Type } from "./helper";

class Ship {
    #hit = 0;

    constructor(type){
        this.length = Type[type]
    }

    hit(){
        this.#hit++
    }

    isSunk(){
        if (this.#hit == this.length){
            return true
        }
        else return false
    }
}

export {Ship}