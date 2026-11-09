console.log("hi!");
const display = document.querySelector("#display")
const clear = document.querySelector("#clear")
const change = document.querySelector("#change")
const percent = document.querySelector("#percent")
const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const result = document.querySelector("#result")
const period = document.querySelector("#period")
const n0 = document.querySelector("#n0")
const n1 = document.querySelector("#n1")
const n2 = document.querySelector("#n2")
const n3 = document.querySelector("#n3")
const n4 = document.querySelector("#n4")
const n5 = document.querySelector("#n5")
const n6 = document.querySelector("#n6")
const n7 = document.querySelector("#n7")
const n8 = document.querySelector("#n8")
const n9 = document.querySelector("#n9")

let number = 0
console.log(number+99)
let operation = false

clear.addEventListener("click", () => {
    display.textContent = "0"
})

n0.addEventListener("click", () => {
    if (Number(display.textContent) != 0) {
        display.textContent = display.textContent + "0" 
    }
})

n1.addEventListener("click", () => {
    if (Number(display.textContent) == 0) {
        display.textContent =  "1" 
    } else{
        display.textContent = display.textContent + "1" 
    }
})

n2.addEventListener("click", () => {
    if (Number(display.textContent) == 0) {
        display.textContent =  "2" 
    } else{
        display.textContent = display.textContent + "2" 
    }
})

n3.addEventListener("click", () => {
    if (Number(display.textContent) == 0) {
        display.textContent =  "3" 
    } else{
        display.textContent = display.textContent + "3" 
    }
})

n4.addEventListener("click", () => {
    if (Number(display.textContent) == 0) {
        display.textContent =  "4" 
    } else{
        display.textContent = display.textContent + "4" 
    }
})

n5.addEventListener("click", () => {
    if (Number(display.textContent) == 0) {
        display.textContent =  "5" 
    } else{
        display.textContent = display.textContent + "5" 
    }
})



change.addEventListener("click")


