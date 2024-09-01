const hiddenTop = document.querySelectorAll('.from_top');
const hiddenLeft = document.querySelectorAll('.from_left');
const hiddenRight = document.querySelectorAll('.from_right');
const hiddenBottom = document.querySelectorAll('.from_bottom');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        (entry.isIntersecting) ? entry.target.classList.add('show') : entry.target.classList.remove('show');
    });
});

const observeEach = (hiddenElement) => {
    hiddenElement.forEach((element) => observer.observe(element));
}

observeEach(hiddenTop);
observeEach(hiddenLeft);
observeEach(hiddenRight);
observeEach(hiddenBottom);