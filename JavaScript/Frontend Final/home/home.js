var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1200,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    }
});