const title = document.querySelector("body");
const colors = ["#f39c12", "#e74c3c", "#C18282", "#FF50CF"];
title.style.backgroundColor = colors[0];

function handleResize() {
      var WindowFrame = window.innerWidth
      console.log(WindowFrame);
      if(WindowFrame<=500){
        title.style.backgroundColor = colors[1];
      }else if (WindowFrame>500 && WindowFrame<=800){
        title.style.backgroundColor = colors[2];
      }else{
        title.style.backgroundColor = colors[3];
      }
    }
  
  window.addEventListener("resize", handleResize);