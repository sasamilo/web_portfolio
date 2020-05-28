
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {
        //toggle view
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();

//background changer
function bgChanger() {
    if (this.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add('bg-active');
    } else {
        document.body.classList.remove('bg-active');
    }
}

window.addEventListener('scroll', bgChanger);


//menu navigation highlight
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const backgrounds = ['#f79a82'];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const backgroundIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };

        if (entry.isIntersecting) {
            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);
            bubble.style.background = backgrounds[backgroundIndex];
        };
    });
};

sections.forEach(section => {
    observer.observe(section);
});