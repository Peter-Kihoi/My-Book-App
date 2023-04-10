const wrapper = document.querySelector(".dropdown-wrapper");
const userPic = document.querySelector(".user");
const formWrapper = document.querySelector(".formbox-wrapper");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");
const loginBox = document.querySelector(".login");
const registerBox = document.querySelector(".register");
const loginPopup = document.querySelector(".login-popup");
const btnClose = document.querySelector(".fa-close");

userPic.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})

registerBtn.addEventListener("click", () => {
    formWrapper.classList.add("active")
    registerBox.classList.add("active");
    loginBox.classList.add("active");
})

loginBtn.addEventListener("click", () => {
    formWrapper.classList.remove("active");
    registerBox.classList.remove("active");
    loginBox.classList.remove("active");
})

loginPopup.addEventListener("click", () => {
    formWrapper.classList.add("active-popup")
})
btnClose.addEventListener("click", () => {
    console.log("clicked");
    formWrapper.classList.remove("active-popup")
})