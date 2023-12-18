let Type = {
    "Cruiser":3,
    "Carrier":5,
    "Battleship":4,
    "Submarine":3,
    "Destroyer":2
}

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

const random = (min, max) =>  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomPos = () => {
    return `${letters[random(0,9)]}${random(1,10)}`
}

export {random,letters,Type ,randomPos}

