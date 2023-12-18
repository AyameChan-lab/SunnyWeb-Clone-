const toggle_btn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

toggle_btn.addEventListener('click',()=>{
    menu.classList.toggle('active'); 
    overlay.classList.toggle('active')
});

overlay.addEventListener('click',()=>{
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
})