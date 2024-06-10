let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let msg = document.getElementById("msg");
let newGame= document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container")

let turnO= true;

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML="O";
            turnO = false;
        }
        else {
            box.innerHTML="X";
            turnO = true;
        }
        box.disabled = true;
    checkWinner();
    });

});

const checkWinner=()=>{
    for(let pattern of winPattern){
        let post1=boxes[pattern[0]].innerHTML;
        let post2=boxes[pattern[1]].innerHTML;
        let post3=boxes[pattern[2]].innerHTML;

        if(post1!= ""&&post2!= ''&&post3!= ''){
            if(post1===post2&&post2===post3){
                console.log("winner",post1)
                disabledBoxes();
                showWinner(post1);
            }
        }
    }
}
const disabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}
const enabledBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerHTML='';
    }
}
const showWinner =(post1)=>{
    msg.innerHTML=`Congratulation the winner is ${post1}`;
    msgContainer.classList.remove("hide");
}

const resetGame =()=>{
    turnO=true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}

newGame.addEventListener('click',resetGame)
reset.addEventListener('click',resetGame)