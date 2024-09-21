let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick= () =>{
    menuIcon.classlist.toggle('fa-xmark');
    navbar.classlist.toggle('active')
}
let sections=document.querySelector('section');
let navlinks=document.querySelector('header nav a');
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height= sec.offsetheight;
        let id=sec.getAttribute('id');
        if(top>=offset && top<offset+height)
            {
                navlinks.forEach.apply(links=>{
                    links.classlist.remove('active');
                    document.querySelector('header nav a[href"=' + id + ']').classlist.add('active');
                });
            };
    });
    let header =document.querySelector('header');
    header.classlist.toggle('sticky', window.scrollY>100);
    menuIcon.classlist.remove('fa-xmark');
    navbar.classlist.remove('active');
}; 
ScrollReveal{(
    distance:'80px',
    duration:2000,
    delay:200,
)};
ScrollReveal().reveal('.home-container, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .education-content, .services-container, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-content h1', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});