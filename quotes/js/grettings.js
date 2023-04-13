const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const gredding = document.querySelector("#gredding");
const HIDDEN_CALSSNAME = "hidden"

const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CALSSNAME);
    panting(username)
}

function panting(username){
    gredding.innerText = `Hello ${username}`;
    gredding.classList.remove(HIDDEN_CALSSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);

}else{
    panting(savedUsername)
}