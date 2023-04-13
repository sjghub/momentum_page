const generateForm = document.querySelector("#Generate_form")
const guessForm = document.querySelector("#Guess_form")
const GENERATE_NUMBER = document.querySelector("#Generate_number");
const GUESS_NUMBER = document.querySelector("#Guess_number");

const HIDDEN_H3 = document.querySelector("#you_choose");
const HIDDEN_H2 = document.querySelector("#result");
const HIDDEN_CLASSNAME = "nosee";

const GN_KEY = "generateNumber";
const GU_KEY = "guessNumber";



function onGenerateBox(event){
    event.preventDefault();
    const generateNumber = GENERATE_NUMBER.value;
    localStorage.setItem(GN_KEY, generateNumber);
}

function onGuessBox(event){
    event.preventDefault();
    const sgnn = localStorage.getItem(GN_KEY);
    let machineNumber = Math.floor(Math.random() * (sgnn))+1;
    const guessNumber = GUESS_NUMBER.value;
    localStorage.setItem(GU_KEY, guessNumber);
    const sgun = localStorage.getItem(GU_KEY);
    HIDDEN_H3.classList.remove(HIDDEN_CLASSNAME);
    HIDDEN_H2.classList.remove(HIDDEN_CLASSNAME);
    HIDDEN_H3.innerText = `you chose : ${guessNumber}, the machine chose: ${machineNumber}`;
    if (machineNumber == sgun){
        HIDDEN_H2.innerText = "you won!"
    }else{
        HIDDEN_H2.innerText = "you lost!"
    }
    
}

generateForm.addEventListener("focusout",onGenerateBox);
guessForm.addEventListener("submit",onGuessBox);
