let dev = document.getElementById('fullstack');

setInterval( () => {
    dev.innerHTML = (dev.textContent == "Back-End") ? "Front-End" : "Back-End";
}, 700);