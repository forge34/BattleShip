let Type = {
    "Cruiser":3,
    "Carrier":5,
    "Battleship":4,
    "Submarine":3,
    "Destroyer":2
}

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