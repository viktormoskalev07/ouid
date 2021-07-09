
//swiper
(function () {
    let swiper = Swiper;
    let init = false;
  
    function swiperMode() {
      let mobile = window.matchMedia("(min-width: 0px) and (max-width: 1200px)");
      let desktop = window.matchMedia(
        "(min-width: 1200px) and (max-width: 40000px)"
      );
  
      if (mobile.matches) {
        if (!init) {
          init = true;
          swiper = new Swiper(".swiper-categories", {
            slidesPerView: 1,
            autoplay: {
              delay: 3000,
            },
            loop: true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            },
          });
        }
      } else if (desktop.matches) {
        init && swiper.destroy();
        init = false;
      }
    }
  
    if (document.querySelector(".swiper-categories")) {
      window.addEventListener("load", function () {
        swiperMode();
      });
  
      window.addEventListener("resize", function () {
        swiperMode();
      });
    }
  })();
  
  (function () {
    let swiperAccessories = Swiper;
    let init = false;
  
    function swiperMode() {
      let mobile = window.matchMedia("(min-width: 0px) and (max-width: 1200px)");
      let desktop = window.matchMedia(
        "(min-width: 1200px) and (max-width: 4000px)"
      );
  
      if (mobile.matches) {
        if (!init) {
          init = true;
          swiperAccessories = new Swiper(".swiper-accessories", {
            slidesPerView: 1,
            loop: true,
            autoplay: {
              delay: 3000,
            },
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next-accessories",
              prevEl: ".swiper-button-prev-accessories",
            },
            breakpoints: {
              320: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              700: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            },
          });
        }
      } else if (desktop.matches) {
        init && swiperAccessories.destroy();
        init = false;
      }
    }
  
    if (document.querySelector(".swiper-accessories")) {
      window.addEventListener("load", function () {
        swiperMode();
      });
  
      window.addEventListener("resize", function () {
        swiperMode();
      });
    }
  })();
  