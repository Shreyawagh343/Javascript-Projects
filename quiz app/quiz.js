const btn = document.getElementById("btn");
const question=document.getElementById("question");
const options= document.querySelectorAll(".options");
const box = document.querySelector(".box");

const questions = [
    {
    "ques":"What does HTML stand for?",
    "a":"Hyperlinks and Text Markup Language",
    "b":" HyperText Markup Language",
    "c":" HomeTool Markup Language",
    "d":" HomeTransition Markup Language",
    "correct":"1"
    },
    {
    "ques":"The correct sequence of HTML tags for starting a webpage is?",
    "a":"Head, Title, HTML, body",
    "b":"HTML, Body, Title, Head",
    "c":"HTML, Head, Title, Body",
    "d":"HTML, Head, Title, Body",
    "correct":"0"
    },
    {
    "ques":"Which of the following element is responsible for making the text bold in HTML?",
    "a":"pre",
    "b":"a",
    "c":"b",
    "d":"br",
    "correct":"2"
    },
    {
    "ques":"Which of the following tag is used for inserting the largest heading in HTML?",
    "a":"h1",
    "b":"h2",
    "c":"h4",
    "d":"h6",
    "correct":"0"
    }
]

let score=0;
let index=0;
const loadQues=()=>{
    const data=questions[index];
    question.innerHTML=data.ques;
    options[0].nextElementSibling.innerHTML=data.a;
    options[1].nextElementSibling.innerHTML=data.b;
    options[2].nextElementSibling.innerHTML=data.c;
    options[3].nextElementSibling.innerHTML=data.d;
}
loadQues();

const getans =()=>{
    let ans_index;
    options.forEach((input ,index)=>{
        if(input.checked){
            ans_index=index;
        }
    });
    return ans_index;
}

const deselectedans =()=>{
    options.forEach((input)=>{
       input.checked = false;
    })
}
    

btn.addEventListener("click",()=>{
    const ans=getans();
    if(ans == questions[index].correct){
       scoreAns= score +=1;
    }
    index++;
    if(index<questions.length){
        deselectedans();
        loadQues();
    }
    else {
        box.innerHTML=`<div class="result">
        <h2>Your Score:${scoreAns}</h2>
        <p>Congralutation!! </p>
        <button class="reload" onclick="location.reload()">Play Again</button>
    </div>`
    }
    
});
