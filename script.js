
/*=========================scroll sections active link============*/
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll =()=>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top<offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
        
    });


/*=========================sticky Navbar=====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY>100);
}





/*=========================scroll reveal=====================*/
ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200 
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servises-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



/*=========================Typed js=====================*/

const typed =new Typed('.multiple-text',{
    strings: ['Frontend Developer', 'Blogger','CS Student'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay :1000,
    loop : true
});