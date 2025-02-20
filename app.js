let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-cotainer");
let newGameBtn= document.querySelector("#new-btn");
let msg = document.querySelector("#msg");
let turnO = true;
let count =0;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [6,4,2]
];
const resetGame =() =>{
    turnO= true;
    count=0;
    enableBox();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        count++;
        if(turnO)
        {
            box.innerText= "O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO= true;
        }
        box.disabled = true;
        checkWinner();
        if(count==9)
        {
            msg.innerText="Match is drow,Start new match";
        }
    });
});

const checkWinner =()=>{
    for (let pattern of winPatterns)
    {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&& pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};
showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBox();
};

const disableBox = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
    
};

const enableBox = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";

    }

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
