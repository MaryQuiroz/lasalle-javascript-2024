let button = document.querySelector("button")
let text = document.querySelector("#nom")
let body = document.querySelector("body")


button.addEventListener("click", () =>{
    console.log(`hola, ${text.value}`);
})

