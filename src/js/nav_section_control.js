const main = document.querySelector('main');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.btn-nav');

main.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        const scrollPosition = main.scrollTop + main.offsetHeight;

        if (scrollPosition >= main.scrollHeight) {
            currentSection = sections[sections.length - 1].getAttribute('id');
        } else if (main.scrollTop >= sectionTop - 50 && main.scrollTop < sectionBottom - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
