import { GameBoard } from "./board";
import { DOMclass } from "./dom";
import { Player } from "./player";
import "./style/main.css"

const MainLoop = (() => {
    const boards = []

    const btnContainer1 = document.getElementById("btn-cont1")
    const btnContainer2 = document.getElementById("btn-cont2")
    let Dom = new DOMclass()

    let players = []

    let placeBtn = document.querySelectorAll(".place")

    const setupShipButtons = (btn, player) => {
        btn.addEventListener("click", ev => {
            if (ev.target.className == "btn") {
                let text = ev.target.textContent
                if (!player.onBoard.includes(text)) {
                    player.onBoard.push(text)
                    player.selected = text
                    console.log(player)
                }
            }
        })
    }

    const updateBoard = (t) => {
            for(let j=1;j<=100;j++){
                const notation = boards[t].childNodes[j].dataset.notation
                const child = boards[t].childNodes[j]
                const board = players[t].board

                if(board.hasShip(notation)){
                    child.classList.add("ship")
                }

            }
    }

    const Place = (board,coord,ship,t) => {
        board.placeShip(coord[0],Number(coord[1]),ship)
        updateBoard(t)
    }

    const Setup = () => {
        players.push(new Player() , new Player())
        const b1 = document.getElementById("b1")
        const b2 = document.getElementById("b2")
        boards.push(b1,b2)

        Dom.createBoard(boards[0])
        Dom.createBoard(boards[1])

        setupShipButtons(btnContainer1, players[0])
        setupShipButtons(btnContainer2, players[1])

        placeBtn.forEach((btn) => {
            btn.addEventListener("click" , (e) => {
                let t = e.target.dataset.target
                let input = document.querySelector(`[data-pl="${t}"]`)
                Place(players[t].board,input.value ,players[t].selected,t)
            })
        })
    }

    return {
        Setup
    }

})();


MainLoop.Setup()