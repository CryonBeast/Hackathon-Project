const wrapper = document.querySelector('.wrapper')
const loginlink = document.querySelector('.login-link')
const signuplink = document.querySelector('.signup-link')
const loginpop = document.querySelector('.btnLogin')
const signuppop = document.querySelector('.btnSignup')
const closebtn = document.querySelector('.icon-close')
let submenu=document.getElementById("submenu")


signuplink.addEventListener('click', () => {
    window.history.pushState(null, null, "/signup")
    wrapper.classList.add('active');
})

loginlink.addEventListener('click', () => {
    window.history.pushState(null, null, "/login")
    wrapper.classList.remove('active');
})

signuppop.addEventListener('click', () => {
    window.history.pushState(null, null, "/signup")
    wrapper.classList.add('active-popup');
    wrapper.classList.add('active');
})

loginpop.addEventListener('click', () => {
    window.history.pushState(null, null, "/login")
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
})

closebtn.addEventListener('click', () => {
    window.history.pushState(null, null, "/home")
    wrapper.classList.remove('active-popup');
})

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    wrapper.style.marginTop = value * 1 + 'px';
})

document.addEventListener('scroll',()=>{
    const header=document.querySelector("header")

    if(window.scrollY>0){
        header.classList.add("scrolled")
    }else{
        header.classList.remove("scrolled")
    }
})