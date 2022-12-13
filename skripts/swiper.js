new Swiper('.image-slider',{
    loop: true,
    


    autoplay: {
        delay: 3500,
        stopOnLastSlide: false,

    },
    speed: 1000,

    observer: true,
    observerParents: true,
    observerSlideChildren: true,
});