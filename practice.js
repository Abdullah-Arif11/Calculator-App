let screen = document.querySelector(".screen")
let btns = document.querySelectorAll(".btn")
let string = ""
let btn_array = Array.from(btns)
btn_array.forEach((btn)=> {
    btn.addEventListener("click", (e)=> {
        if(e.target.innerText == "=") {
            string = eval(string);
            screen.innerText = string
        }
        else if(e.target.innerText == "AC") {
            string = "";
            screen.innerText = string
        }
        else if(e.target.innerText == "DEL") {
            string = string.slice(0, -1);
            screen.innerText = string
        }
        else {
            string += e.target.innerText;
            console.log(string)
            screen.innerText = string
        }
    })
})