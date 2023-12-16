class DOMclass {
    constructor(){

    }

    createBoard(parent){
        for(let i=0;i<100;i++){
            let div = document.createElement('div')
            div.classList.add("cell")
            div.style.width = `77px`;
            div.style.height = `77px`;
            parent.append(div)
        }
    }
}

export {DOMclass}