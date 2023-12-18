import { Ai } from "./ai";
import { DOMclass } from "./dom";
import { random } from "./helper";
import { Player } from "./player";
import "./style/main.css"
import { randomPos } from "./helper";



const MainLoop = (() => {

    /* 
    ** Variable setup
     */
    const boards = []
    const btnContainer1 = document.getElementById("btn-cont1")
    const b1 = document.getElementById("b1")
    const b2 = document.getElementById("b2")
    const aiAlreadyHit = []
    //const btnContainer2 = document.getElementById("btn-cont2")
    let Dom = new DOMclass()
    let players = []
    let ai = new Ai()
    let placeBtn = document.querySelectorAll(".place")

    let aiTurn = false


    /* 
    ** function that adds event listerners to Ship buttons 
     */
    const setupShipButtons = (btn, player) => {
        btn.addEventListener("click", ev => {
            if (ev.target.className == "btn") {
                const text = ev.target.textContent
                player.selected = text
            }
        })
    }

    const UpdateBoard = () => {
        aiAlreadyHit.forEach(el => {
            const element = b1.querySelector(`[data-notation="${el}"]`)
            element.classList.add("hit")
        })
    }

    /* 
    ** Update Board with ships function
    @param t : which player board to update
    TODO make it update both boards instead 
    */
    const updateBoardShips = (t) => {
        for (let j = 1; j <= 100; j++) {
            const notation = boards[t].childNodes[j].dataset.notation
            const child = boards[t].childNodes[j]
            const board = players[t].board

            if (board.hasShip(notation)) {
                child.classList.add("ship")
            }

        }
    }

    /* 
    ** Place ships on board
    */
    const Place = (board, coord, ship, t) => {
        board.placeShip(coord, ship)
        updateBoardShips(t)
    }

    /* 
    * Game loop
    TODO add hit & miss events and turn system
    */
    const run = () => {

        if (players[0].board.isAllSunk() || ai.board.isAllSunk()) {
            alert("Game ended")
        }

        if (aiTurn) {
            let rand = randomPos()
            if (!aiAlreadyHit.includes(rand)) {
                const playerBoard = players[0].board
                const element = b1.querySelector(`[data-notation="${rand}"]`)

                aiAlreadyHit.push(rand)
                playerBoard.recieveHit(rand)

                if (playerBoard.hasShip(rand))
                    element.classList.add("hit")
                else element.classList.add("hit2")
            } else {
                rand = randomPos()
                const playerBoard = players[0].board
                const element = b1.querySelector(`[data-notation="${rand}"]`)

                aiAlreadyHit.push(rand)
                playerBoard.recieveHit(rand)

                if (playerBoard.hasShip(rand))
                    element.classList.add("hit")
                else element.classList.add("hit2")
            }

            aiTurn = false
        }



        window.requestAnimationFrame(run)
    }

    /* 
    * General setup
    ** Grid creation , place & start button event listeners
    
    */
    const Setup = () => {
        players.push(new Player(), new Player())

        const start = document.getElementById("start")
        boards.push(b1, b2)

        Dom.createBoard(boards[0])
        Dom.createBoard(boards[1])

        setupShipButtons(btnContainer1, players[0])

        placeBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const t = e.target.dataset.target
                const input = document.querySelector(`[data-pl="${t}"]`)
                const selected = players[t].selected
                if (!players[t].board.alreadyOnBoard(selected)) {
                    players[t].board.addOnBoard(selected)
                    Place(players[t].board, input.value, selected, t)
                } else alert("Ship already placed")
            })
        })

        b2.addEventListener("click", e => {
            const not = e.target.dataset.notation
            if (not) {
                const AiBoard = ai.board
                AiBoard.recieveHit(not)
                const cell = b2.querySelector(`[data-notation="${not}"]`)

                if (AiBoard.hasShip(not))
                    cell.classList.add("hit")
                else cell.classList.add("hit2")
                aiTurn = true

            }
        })

        ai.place()

        start.addEventListener("click", () => {
            window.requestAnimationFrame(run)
        })
    }

    return {
        Setup
    }

})();


MainLoop.Setup()

