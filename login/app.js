const wraper = document.querySelector('.wraper');
const loginlink = document.querySelector('.login_link');
const signinlink = document.querySelector('.signin_link');
const loginup = document.querySelector('.login_up');
const iconclose = document.querySelector('.icon_close');



signinlink.addEventListener('click',()=> {
    wraper.classList.add('active');
});
loginlink.addEventListener('click',()=> {
    wraper.classList.remove('active');
});
loginup.addEventListener('click',()=> {
    wraper.classList.add('active-up');
});
iconclose.addEventListener('click',()=> {
    wraper.classList.remove('active-up');
});