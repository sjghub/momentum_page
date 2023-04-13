const title = document.querySelector("h1");

const title = document.querySelector("h2");
const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  handleMouseLeave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  handleWidowResize: function () {
    title.innerText = "you just resized!";
    title.style.color = colors[2];
  },
  hadleContextMenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[4];
  }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWidowResize);
window.addEventListener("contextmenu", superEventHandler.hadleContextMenu);
