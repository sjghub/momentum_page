const clock = document.querySelector("h2#clock");
const clockk = document.querySelector("h2#clockk");




function time(){
    const today = new Date();


    const hours = String(today.getHours()).padStart(2,"0");
    const minuts = String(today.getMinutes()).padStart(2,"0");
    const seconds = String(today.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minuts}:${seconds}`;
}

time();
setInterval(time,1000);

