const degrees = document.getElementById("degrees");
const type = document.getElementById("type");
const result = document.getElementById("showresult");
const btn = document.getElementById("btn");


btn.addEventListener("click",(e)=>{
    e.preventDefault();
    getconvert();
});

function getconvert(){

    if(type.value==="Fahrenheit"){
        let ansFah = (9/5 * degrees.value) + 32;
        console.log(ansFah)
        result.innerText=`${ansFah.toFixed(2)} F`;
        type.value='Fahrenheit'
    }
    else if (type.value==="Kelvin"){
        let ansKel = degrees.value + 273.15;
        console.log(ansKel);
        result.innerText=`${ansKel} K`;
        type.value='Fahrenheit'
        
    }
}
 
