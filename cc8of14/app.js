const generateForm = document.querySelector("#Generate_form")
const guessForm = document.querySelector("#Guess_form")
const GENERATE_NUMBER = document.querySelector("#Generate_number");
const GUESS_NUMBER = document.querySelector("#Guess_number");

const HIDDEN_H3 = document.querySelector("#you_choose");
const HIDDEN_H2 = document.querySelector("#result");
const HIDDEN_CALSSNAME = "hidden";

const GN_KEY = "genrateNumber" ;
const GU_KEY = "guessNumber";



const savedgenerateNumber  = localStorage.getItem(GN_KEY);
const savedguessNumber  = localStorage.getItem(GU_KEY);

function onGenerateBox(event){
    event.preventDefault();
    const genrateNumber = GENERATE_NUMBER.value;
    localStorage.setItem(GN_KEY,genrateNumber);
    console.log(genrateNumber);
}


function onGuessBox(event){
    event.preventDefault();
    const guessNumber = GUESS_NUMBER.value;
    localStorage.setItem(GU_KEY,guessNumber);
    panting();
}



function panting(){
    HIDDEN_H3.innerText = `you chose : ${genrateNumber}, the machine chose: ${guessNumber}`;
    if (savedgenerateNumber != savedguessNumber){
        HIDDEN_H2.innerText = "you lost!"
    }else{
        HIDDEN_H2.innerText = "you win!"
    }
}
// const sgun = localStorage.getItem(GU_KEY);
// const sgnn = localStorage.getItem(GN_KEY);


// if (sgun === null){
//     generateForm.addEventListener("focusout",onGenerateBox);
//     guessForm.addEventListener("submit",onGuessBox);
// }else{
//     guessForm.addEventListener("submit",onGuessBoxpanting);
// }



// function panting(){
//     const machineNumber = Math.floor(Math.random()*sgnn);
//     HIDDEN_H3.innerText = `you chose : ${sgun}, the machine chose: ${machineNumber}`;
//     if (machineNumber === sgun){
//         HIDDEN_H2.innerText = "you win!"
//     }else{
//         HIDDEN_H2.innerText = "you lost!"
//     }
// }

// function onGuessBoxpanting(event){
//     event.preventDefault();
//     const sgun = localStorage.getItem(GU_KEY);
//     const sgnn = localStorage.getItem(GN_KEY);
//     const machineNumberr = Math.floor(Math.random()*sgnn);
//     console.log(machineNumberr);
//     HIDDEN_H3.innerText = `you chose : ${sgun}, the machine chose: ${machineNumberr}`;
//     if (machineNumberr === sgun){
//         HIDDEN_H2.innerText = "you win!"
//     }else{
//         HIDDEN_H2.innerText = "you lost!"
//     }
// }