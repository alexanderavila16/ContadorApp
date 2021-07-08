
// const add = document.querySelector(".add");
// const resetcount = document.querySelector(".reset");
// const sub = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) =>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setcolor()
    }
    if(e.target.classList.contains("subtract")){
        count.innerHTML--;
        setcolor()
    }
    if(e.target.classList.contains("reset")){
        count.innerHTML =  0;
        setcolor()
    }
})

function setcolor(){
    if(count.innerHTML > 0){
        count.style.color = "lightgreen";
    } else if(count.innerHTML < 0){
        count.style.color = "orangered";
        
    }else{
        count.style.color = "#fff";

    }
}



/*Otra forma de hacerlo

add.addEventListener("click", () =>{
    count.innerHTML++;

})
sub.addEventListener("click", () =>{
    count.innerHTML--;

})


resetcount.addEventListener("click", () =>{
    count.innerHTML =  0;

}) */






