document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const images = [
        'url("/img/bg-1.jpeg")',
        'url("/img/bg-2.jpeg")',
        'url("/img/bg-3.jpeg")',
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        heroSection.style.backgroundImage = images[currentIndex];
    }

    // Set the initial background image immediately
    heroSection.style.backgroundImage = images[currentIndex];

    // Change the background image every 2 seconds
    setInterval(changeBackgroundImage, 2000);
});
