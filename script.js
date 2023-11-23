const links = document.querySelectorAll('.navbar-link');

links.forEach(link => {

    link.addEventListener('click', () => {

        links.forEach(e => {
            e.classList.remove('change');
        });

        link.classList.add('change');
    });
});