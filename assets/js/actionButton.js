    document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash !== '#inicio') {
        window.location.hash = '#inicio';
    }

    const backToTopButton = document.getElementById('backToTop');
    const whatsappButton = document.getElementById('whatsappButton');

    function toggleButtons() {
        const scrollPosition = window.scrollY;
        if (backToTopButton && whatsappButton) {
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'flex';
            whatsappButton.style.display = 'flex';
            setTimeout(() => {
            backToTopButton.style.opacity = '1';
            whatsappButton.style.opacity = '1';
            }, 10);
        } else {
            backToTopButton.style.opacity = '0';
            whatsappButton.style.opacity = '0';
            setTimeout(() => {
            backToTopButton.style.display = 'none';
            whatsappButton.style.display = 'none';
            }, 500);
        }
        }
    }

    if (backToTopButton && whatsappButton) {
        document.addEventListener('scroll', toggleButtons);

        backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        whatsappButton.addEventListener('click', function () {
        window.location.href = 'https://wa.me/5599999999999';
        });
    }
    });
