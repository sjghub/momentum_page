const clock = document.querySelector("h2#clock");




function time(){
    const marry = new Date("2023-12-25");
    const today = new Date();
    const d_day = marry - today;

    const days = Math.floor(d_day / (1000*60*60*24));
    const hours = Math.floor((d_day / (1000*60*60)) % 24);
    const minuts = Math.floor((d_day / (1000*60)) % 60);
    const seconds = Math.floor(d_day / 1000 % 60);

    const days_pad = String(days).padStart(2,"0");
    const hours_pad = String(hours).padStart(2,"0");
    const minuts_pad = String(minuts).padStart(2,"0");
    const seconds_pad = String(seconds).padStart(2,"0");
    clock.innerText = `${days_pad}d ${hours_pad}h ${minuts_pad}m ${seconds_pad}s`;
}

time();
setInterval(time,1000);
