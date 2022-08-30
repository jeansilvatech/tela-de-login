var formSignin = document.querySelector('#signin');
var formSignup = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');

document.querySelector('#btnSignin').addEventListener('click', ()=>{
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style = "0px";
})

document.querySelector('#btnSignup').addEventListener('click', ()=>{
    formSignup.style.left = "25px";
    formSignin.style.left = "-450px";
    btnColor.style.left = "114px";

})