const set = document.getElementById("score");
const dec = document.getElementById("dec")
const reset = document.getElementById("reset")
const inc = document.getElementById("inc");

let count=0;

dec.addEventListener("click",()=>{
    let deccounter=count--;
    set.innerHTML=deccounter;
})
reset.addEventListener("click",()=>{
    set.innerHTML=0;
})
inc.addEventListener("click",()=>{
    let inccounter=count++;
    set.innerHTML=inccounter;
})