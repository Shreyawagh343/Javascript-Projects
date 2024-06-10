const msg= document.querySelector(".color")
const btn = document.getElementById("btn");
btn.addEventListener("click",(btn)=>{
let randomnumber = Math.floor(Math.random()*1500);
msg.innerHTML= `#f${randomnumber}`;
document.body.style.backgroundColor=`#f${randomnumber}`;

})