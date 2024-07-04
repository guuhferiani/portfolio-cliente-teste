/*-------------------------------Menu-------------------------------------- */ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')



/*------------------------ Remove menu mobile------------------------------*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))






/*---------------------------------Scroll animation-----------------------------*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('.home-text, .about-img, .skills-subtitle, .skills-text, .skills-title',{}); 
sr.reveal('.home-img, .about-subtitle, .about-text, .skills-img',{delay: 400}); 
sr.reveal('.icon, .img',{ interval: 200}); 
sr.reveal('.skills-data, .work-img, .contact-input',{interval: 200}); 


