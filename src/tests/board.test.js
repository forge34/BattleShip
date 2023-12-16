import { GameBoard } from "../board";
import { Ship } from "../ship";

let GB = new GameBoard()

test('Place ship1 ', () => {
    GB.placeShip("a",1,"Destroyer")
    expect(GB.boardData("a1")).toEqual({missed:false,hit:false,"ship":{length : 2}});
});

test('Place ship2 ', () => {
    GB.placeShip("c",9,"Destroyer")
    expect(GB.boardData("a1")).toEqual({missed:false,hit:false,"ship":{length : 2}});
});

test('Place ship3 ', () => {
    GB.placeShip("b",6,"Destroyer")
    expect(GB.boardData("a1")).toEqual({missed:false,hit:false,"ship":{length : 2}});
});

test('Hit ship1', () => {
    GB.recieveHit('a',1)
    GB.recieveHit('a',2)
    expect(GB.boardData("a1")).toEqual({missed:false,hit:true,"ship":{length:2}});
});