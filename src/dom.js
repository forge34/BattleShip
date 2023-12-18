import { letters } from "./helper";
/*

TODO unecessary class , remove later
 */
class DOMclass {
    constructor(){
    }

    createBoard(parent){
        for(let i=0;i<10;i++){
            for(let j=1;j<=10;j++){
                let div = document.createElement('div')
                div.classList.add("cell")
                div.style.width = `77px`;
                div.style.height = `77px`;
                div.dataset.notation = `${letters[i]}${j}`
                parent.append(div)
            }
        }
    }
}

export {DOMclass}