//DECLARANDO LAS VARIABLES
var variableA
var variableB
var operacion

let operacionSigno=document.querySelector("#operacion")

let raiz=document.querySelector("#raiz")
let siete=document.querySelector("#siete")
let ocho=document.querySelector("#ocho")
let nueve=document.querySelector("#nueve")
let entre=document.querySelector("#entre")

let ac=document.querySelector("#ac")
let uno=document.querySelector("#uno")
let dos=document.querySelector("#dos")
let tres=document.querySelector("#tres")
let menos=document.querySelector("#menos")

let c=document.querySelector("#c")
let igual=document.querySelector("#igual")
let cero=document.querySelector("#cero")
let dosCero=document.querySelector("#dosCero")
let mas=document.querySelector("#mas")

let porcentaje=document.querySelector("#porcentaje")
let cuatro=document.querySelector("#cuatro")
let cinco=document.querySelector("#cinco")
let seis=document.querySelector("#seis")
let por=document.querySelector("#por")

let input=document.querySelector("#dato")

porcentaje.addEventListener("click",()=>{
    variableB=input.value/100
    input.value=variableB
    operacion="%"
})


igual.addEventListener("click",()=>{
    variableB=input.value
    operacionSigno.innerHTML=""
    resolver()  
})

ac.addEventListener("click",()=>{
    resetar()
})

c.addEventListener("click",()=>{
    resetar()
})

raiz.addEventListener("click",()=>{
    let res=Math.sqrt(input.value)
    input.value=res
})

entre.addEventListener("click",()=>{
    variableA=input.value
    operacion="÷"
    operacionSigno.innerHTML="÷"
    limpiar()
})

por.addEventListener("click",()=>{
    variableA=input.value
    operacion="×"
    operacionSigno.innerHTML="×"
    limpiar()
})

menos.addEventListener("click",()=>{
    variableA=input.value
    operacion="-"
    operacionSigno.innerHTML="-"
    limpiar()
})

mas.addEventListener("click",()=>{
    variableA=input.value
    operacion="+"
    operacionSigno.innerHTML="+"
    limpiar()
})

uno.addEventListener("click",()=>{
    input.value+=1
})

dos.addEventListener("click",()=>{
    input.value+=2
})

tres.addEventListener("click",()=>{
    input.value+=3
})

cuatro.addEventListener("click",()=>{
    input.value+=4
})

cinco.addEventListener("click",()=>{
    input.value+=5
})

seis.addEventListener("click",()=>{
    input.value+=6
})

siete.addEventListener("click",()=>{
    input.value+=7
})

ocho.addEventListener("click",()=>{
    input.value+=8
})

nueve.addEventListener("click",()=>{
    input.value+=9
})

cero.addEventListener("click",()=>{
    input.value+=0
})

dosCero.addEventListener("click",()=>{
    input.value+="00"
})

function resolver(){
    let res=0
    switch(operacion){
        case "÷":
            res=parseFloat(variableA)/parseFloat(variableB)
            input.value=res
            break
        case "+":
            res=parseFloat(variableA)+parseFloat(variableB)
            input.value=res
            break
        case "-":
            res=parseFloat(variableA)-parseFloat(variableB)
            input.value=res
            break
        case "×":
            res=parseFloat(variableA)*parseFloat(variableB)
            input.value=res
            break
        case "%":
            res=parseFloat(variableA)*parseFloat(variableB)
            input.value=res
            break
        default:
            console.log("no existe la opcion")
    }
}

function resetar(){
    variableA=0
    variableB=0
    operacion=""
    input.value=""
}

function limpiar(){
    input.value=""
}

    
