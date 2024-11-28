document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const accordion = box.querySelector('.accordion');
        if (accordion) {
            accordion.classList.toggle('open');
        }
    });
});
