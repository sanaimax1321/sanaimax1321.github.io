// Minimal interactivity for navigation and small effects
document.addEventListener('DOMContentLoaded',()=>{
const toggle = document.getElementById('menuToggle');
const toggle2 = document.getElementById('menuToggle2');
const navUl = document.querySelector('nav ul');


function toggleMenu(){
if(!navUl) return;
navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
}
if(toggle) toggle.addEventListener('click', toggleMenu);
if(toggle2) toggle2.addEventListener('click', toggleMenu);


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener('click',function(e){
e.preventDefault();
document.querySelector(this.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
});
});


// Simple reveal for portrait on hover
const portrait = document.querySelector('.portrait');
if(portrait){
portrait.addEventListener('mouseenter',()=>portrait.classList.add('animate__animated','animate__pulse'));
portrait.addEventListener('mouseleave',()=>portrait.classList.remove('animate__animated','animate__pulse'));
}
});