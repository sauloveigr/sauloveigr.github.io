const buttonScroll = document.querySelector('#button-scroll');

buttonScroll.addEventListener('click', function () {
    window.scrollTo ({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});