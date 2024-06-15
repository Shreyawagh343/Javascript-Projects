const input = document.getElementById("input");
const btn = document.getElementById("btn");
const taskitem = document.querySelector(".taskitem");


btn.addEventListener("click",()=>{
     let inputAns = input.value;
     if(inputAns!=''){
        const listItem = document.createElement("li");
        listItem.innerHTML=`${inputAns} <button id="li-btn"><i class="fa-solid fa-xmark"></i></button>`
        taskitem.appendChild(listItem);
        input.value='';
         }
})



