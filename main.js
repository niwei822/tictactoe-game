let boxes = document.querySelectorAll(".box");
let turn = "X";
let gameover = false;

boxes.forEach(e =>{
    e.innerHTML = "";
    e.addEventListener("click", ()=>{
        if(!gameover && !e.innerHTML){
            e.innerHTML = turn;
            changeturn();
            checkwin();
            checkdraw();
        }
    })
})

function changeturn(){
    if(turn == "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function checkwin(){
    let winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for(let i = 0; i < winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;
        if(v0 != ""&& v0 == v1 && v1 == v2){
            gameover = true;
            document.querySelector("#results").innerHTML = v0 + " wins";
            document.querySelector("#play-again").style.display = "inline";

            for(j = 0; j < boxes.length; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "rgb(112, 216, 188)";
                boxes[winConditions[i][j]].style.color = "#000";
            }
        }
    }
}

function checkdraw(){
   if(!gameover){
       let draw = true;
       boxes.forEach(e =>{
           if(e.innerHTML === ""){
               draw = false;
           }
       })
       if(draw){
           gameover = true;
           document.querySelector("#results").innerHTML = "Draw";
           document.querySelector("#play-again").style.display = "inline";
       }
   }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    gameover = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";
    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "white";
    })
})