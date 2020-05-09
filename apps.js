const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    'linear-gradient(to right top, #628dd2, #d3eee0)',
    'linear-gradient(to right top, #ffe101 #d3dd96)',
    'linear-gradient(to right top, #d3eee0, #f7735c)',
    'linear-gradient(to right top, #4fc1ea, #d7519c)'
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
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
            bubble.style.background = gradients[gradientIndex];
        };
    });
};

sections.forEach(section => {
    observer.observe(section);
});

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  

    burger.addEventListener('click', () => {
            //toggle view
        nav.classList.toggle('nav-active');

            //animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
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



// // Wrap the module in a self-executing anonymous function
// // to avoid leaking variables into global scope:
// (function (document) {
//   // Enable ECMAScript 5 strict mode within this function:
//   'use strict';

//   // Obtain a node list of all elements that have class="draggable":
//   var draggable = document.getElementsByClassName("draggable"),
//       draggableCount = draggable.length, // cache the length
//       i; // iterator placeholder

//   // This function initializes the drag of an element where an
//   // event ("mousedown") has occurred:
//   function startDrag(evt) {

//       // The element's position is based on its top left corner,
//       // but the mouse coordinates are inside of it, so we need
//       // to calculate the positioning difference:
//       var diffX = evt.clientX - this.offsetLeft,
//           diffY = evt.clientY - this.offsetTop,
//           that = this; // "this" refers to the current element,
//                        // let's keep it in cache for later use.


//       // moveAlong places the current element (referenced by "that")
//       // according to the current cursor position:
//       function moveAlong(evt) {
//           that.style.left = (evt.clientX - diffX) + 'px';
//           that.style.top = (evt.clientY - diffY) + 'px';
//       }

//       // stopDrag removes event listeners from the element,
//       // thus stopping the drag:
//       function stopDrag() {
//           document.removeEventListener('mousemove', moveAlong);
//           document.removeEventListener('mouseup', stopDrag);
//       }

//       document.addEventListener('mouseup', stopDrag);
//       document.addEventListener('mousemove', moveAlong);
//   }

//   // Now that all the variables and functions are created,
//   // we can go on and make the elements draggable by assigning
//   // a "startDrag" function to a "mousedown" event that occurs
//   // on those elements:
//   for (i = 0; i < draggableCount; i += 1) {
//       draggable[i].addEventListener('mousedown', startDrag);
//   }
// }(document));

// function bgChanger() {
//     if(this.scrollY > this.innerHeight / 0.5){
//         document.body.classList.add('bg-active');
// } else {
//     document.body.classList.remove('bg-active');
// }
// }

// window.addEventListener("scroll", bgChanger);