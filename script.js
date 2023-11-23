const links = document.querySelectorAll('.navbar-link');

links.forEach(link => {

    link.addEventListener('click', () => {

        links.forEach(e => {
            e.className = 'navbar-link';
        });

        link.classList.add('change');

        link.previousElementSibling.classList.add('prevElChange');
        link.nextElementSibling.classList.add('nextElChange');
    });
});