// query selectors
const current1 = document.querySelector('#current1');
const current2 = document.querySelector('#current2');
const current3 = document.querySelector('#current3');
const current4 = document.querySelector('#current4');
const imgs1 = document.querySelectorAll('.imgs1 img');
const imgs2 = document.querySelectorAll('.imgs2 img');
const imgs3 = document.querySelectorAll('.imgs3 img');
const imgs4 = document.querySelectorAll('.imgs4 img');
const opacity = 0.4;

// Set first image opacity
imgs1[0].style.opacity = opacity;
imgs2[0].style.opacity = opacity;
imgs3[0].style.opacity = opacity;
imgs4[0].style.opacity = opacity;

// functions
function imgClick1(e1) {
    // reset the opacity on every click
    imgs1.forEach(img1 => (img1.style.opacity = 1));

    // change current image to src of clicked image
    current1.src = e1.target.src;

    // add fade-in class
    current1.classList.add('fade-in');

    // Reset fade-in class after 500 milliseconds because it doesn't extend to all clicks
    setTimeout(() => current1.classList.remove('fade-in'), 500);

    //change the opacity to opacity variable on every click
    e.target.style.opacity = opacity;
}

function imgClick2(e2) {
    // reset the opacity on every click
    imgs2.forEach(img2 => (img2.style.opacity = 1));

    // change current image to src of clicked image
    current2.src = e2.target.src;

    // add fade-in class
    current2.classList.add('fade-in');

    // Reset fade-in class after 500 milliseconds because it doesn't extend to all clicks
    setTimeout(() => current2.classList.remove('fade-in'), 500);

    //change the opacity to opacity variable on every click
    e.target.style.opacity = opacity;
}

function imgClick3(e3) {
    // reset the opacity on every click
    imgs3.forEach(img3 => (img3.style.opacity = 1));

    // change current image to src of clicked image
    current3.src = e3.target.src;

    // add fade-in class
    current3.classList.add('fade-in');

    // Reset fade-in class after 500 milliseconds because it doesn't extend to all clicks
    setTimeout(() => current3.classList.remove('fade-in'), 500);

    //change the opacity to opacity variable on every click
    e.target.style.opacity = opacity;
}

function imgClick4(e4) {
    // reset the opacity on every click
    imgs4.forEach(img4 => (img4.style.opacity = 1));

    // change current image to src of clicked image
    current4.src = e4.target.src;

    // add fade-in class
    current4.classList.add('fade-in');

    // Reset fade-in class after 500 milliseconds because it doesn't extend to all clicks
    setTimeout(() => current4.classList.remove('fade-in'), 500);

    //change the opacity to opacity variable on every click
    e.target.style.opacity = opacity;
}

// event listeners
imgs1.forEach(img1 => 
    img1.addEventListener('click', imgClick1)
);

imgs2.forEach(img2 => 
    img2.addEventListener('click', imgClick2)
);

imgs3.forEach(img3 => 
    img3.addEventListener('click', imgClick3)
);

imgs4.forEach(img4 => 
    img4.addEventListener('click', imgClick4)
);