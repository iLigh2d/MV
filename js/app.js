const burggerBtn = document.querySelector('.icon-menu')
if(burggerBtn) {
    const burgerBody = document.querySelector('.menu__list')
    burggerBtn.addEventListener('click', (e) => {
        document.body.classList.toggle('_lock')
        burggerBtn.classList.toggle('_active')
        burgerBody.classList.toggle('_active')
    })
}
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
          slidesPerGroup: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
            slidesPerGroup: 3,
          }
      }
  });