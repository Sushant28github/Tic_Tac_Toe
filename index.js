let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset_btn")
let msgConatiner = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;
let count = 0;
const winPAtterns = [
    [0 ,1,2] ,
    [0 ,3,6] ,
    [0 ,4,8] ,
    [1 ,4,7] ,
    [2 ,5,8] ,
    [2 ,4,6] ,
    [3 ,4,5] ,
    [6,7,8] 
]



boxes.forEach((box) =>{
    
    box.addEventListener("click" , ()=>{
        console.log("click")
        count++;
        if(count >= 9){
            setTimeout(() =>{
                reset();
            }, 2000)
        }
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})


function checkWinner() {
    for(pattern of winPAtterns){
       let pos1Val = boxes[pattern[0]].innerText ;
       let pos2Val = boxes[pattern[1]].innerText ;
       let pos3Val = boxes[pattern[2]].innerText ;

        if(pos1Val != "" &&  pos2Val != "" && pos3Val != "" ){
            if(pos1Val == pos2Val  && pos2Val == pos3Val ){
                setTimeout(() => {
                    showWinner(pos1Val);
                }, 300);
            }
        }
    
    }
}


const reset =() =>{
    count  = 0;
    boxes.forEach((box) =>{
        msgConatiner.removeAttribute("hide")
        box.innerText = ""
        box.disabled= false
    })
    msgConatiner.classList.add("hide")
    msg.innerHTML = ""
}
resetBtn.addEventListener("click" , () =>{
    reset()
})

const showWinner = (winner) => {
    msgConatiner.classList.remove('hide')
    disableBoxes()
msg.innerHTML = `<h4> Congratulations...!!  Player ${winner} Won the game </h4>`


setTimeout(() => {
    reset()
}, 3000);
}


const disableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = true;
    })
}