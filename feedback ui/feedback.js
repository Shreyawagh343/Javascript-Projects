const rating = document.querySelectorAll(".rating");
const msgContainer = document.querySelector(".msg-container");
const phide=document.getElementById("phide")
const btn = document.getElementById("btn")
const rateHide = document.getElementById("ratings-container");



rating.forEach((rate)=>{
rate.addEventListener("click",(event)=>{
  let showResponse = event.target.innerText || event.target.parentNode.innerText;
btn.addEventListener("click",()=>{
    msgContainer.classList.remove("hide");
    rateHide.classList.add("rating-hide");
    btn.classList.add("rating-hide")
    phide.innerText=`Feedback :${showResponse}`

})
})
})

