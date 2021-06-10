body = document.querySelector("body");
html = document.querySelector("html");
header = document.querySelector("header");
btnMenu = document.querySelector(".btn-menu");

window.onload = function () {
  pagescroll();
};

// мобильное меню
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").addEventListener("click", togglenav);
// document.querySelector(".nav-menu").onclick = closenav;

document.querySelector(".nav-background").onclick = closenav;

function closenav() {
  nav.classList.remove("nav-open");
  btnMenu.style.marginRight = "0";
  showscroll();
}

function togglenav() {
  nav.classList.toggle("nav-open");
  if (nav.classList.contains("nav-open")) {
    btnMenu.style.marginRight = window.innerWidth - html.offsetWidth + "px";
    hidescroll();
  } else {
    showscroll();
    btnMenu.style.marginRight = "0";
  }
}

// мобильное меню

// отключить прокрутку
function hidescroll() {
  body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
  body.style.overflow = "hidden";
}

function showscroll() {
  body.style.paddingRight = 0;
  body.style.overflow = "visible";
}

let scrolid = 0;

function togglescroll() {
  if (scrolid == 0) {
    body.style.paddingRight = window.innerWidth - html.offsetWidth + "px";
    body.style.overflow = "hidden";
    scrolid = 1;
  } else {
    body.style.paddingRight = 0;
    body.style.overflow = "visible";
    scrolid = 0;
  }
}

// отключить прокрутку

// Появление меню при прокрутке
function pagescroll() {
  header.classList.add("fixed-header"); //меняем хедер со статика на фиксед только после загрузки страници
  hplace = document.querySelector(".header-place"); // вместо падинга на боди используем пустой блок
  let headerheight = header.offsetHeight + "px"; //получаем текущую высоту хедера
  hplace.style.height = headerheight; //задаем пустому блоку высоту хедера
  window.addEventListener("resize", function (event) {
    if (headerheight !== header.offsetHeight + "px") {
      //меняем высоту пустого блока только если изменилась высота хедера
      headerheight = header.offsetHeight + "px";
      hplace.style.height = headerheight;
    }
  });

  let pscroll = 0;
  window.addEventListener("scroll", function () {
    if ((pscroll < pageYOffset) & (pageYOffset > header.offsetHeight)) {
      header.style.transform = "translateY(-100%)"; //прячем хедер при прокрутке вниз
      header.style.boxShadow = "none";
    } else if (pageYOffset == 0) {
      header.style.boxShadow = "none";
    } else {
      header.style.transform = "none"; //показываем хедер при прокрутке вверх
      header.style.boxShadow = "0px 4px 4px 0px rgba(34, 60, 80, 0.18)";
    }
    pscroll = pageYOffset;
  });
}

//Появление меню при прокрутке

//отправка формы
let form = document.querySelectorAll(".order-form");

const modal = document.getElementById("modal");

function ajaxform(evt) {
  gtag("event", "submit", {
    event_category: "Form",
  });
  evt.preventDefault();
  let formstatus = this.querySelector(".formstatus");
  formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

  let formData = {
    desc: this.querySelector('input[name="description"]').value,
    name: this.querySelector('input[name="name"]').value,

    phone: this.querySelector('input[name="phone"]').value,
  };
  console.log(formData);
  let request = new XMLHttpRequest();

  request.addEventListener("load", function () {
    formstatus.innerHTML = "Ваша заявка успешно отправлена, ожидайте звонка";
  });

  request.open("POST", "/mail.php", true);
  request.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded; charset=UTF-8"
  );
  request.send(
    "name=" +
      encodeURIComponent(formData.name) +
      "&phone=" +
      encodeURIComponent(formData.phone) +
      "&desc=" +
      encodeURIComponent(formData.desc)
  );
}

for (i = 0; i < form.length; i++) {
  form[i].addEventListener("submit", ajaxform);
}
//отправка формы

// accordion

function accordionInit() {
  window.addEventListener("load", function () {
    const accordion = document.querySelector(".accordion");
    const items = accordion.querySelectorAll(".accordion__item");

    const openedItem = (item) => {
      const opened_item = accordion.querySelector(".is-open");

      toggle_item(item);

      if (opened_item && opened_item !== item) {
        toggle_item(opened_item);
      }
    };

    items.forEach((item) => {
      const title = item.querySelector(".accordion__title-text");

      title.addEventListener("click", (e) => {
        openedItem(item);
      });

      title.addEventListener("keydown", (e) => {
        openedItem(item);
      });
    });

    const toggle_item = (item) => {
      const body = item.querySelector(".accordion__body");

      if (item.classList.contains("is-open")) {
        body.removeAttribute("style");
        item.classList.remove("is-open");
      } else {
        body.style.height = body.scrollHeight + "px";
        item.classList.add("is-open");
      }
    };
  });
}

if (document.querySelector(".accordion")) {
  accordionInit();
}
// accordion

//dropdown

function dropdown() {
  const drop = document.querySelector(".dropdown__activator");
  const dropBody = document.querySelector(".dropdown");

  if (innerWidth < 992) {
    drop.addEventListener("click", function (e) {
      target = e.target.classList.contains("dropdown__activator");
      if (
        (target = e.target.classList.contains("dropdown__activator")) ||
        (target = e.target.tagName = "svg")
      ) {
        drop.classList.toggle("dropdown_open");
      }
    });
  } else if (innerWidth > 992) {
    dropBody.addEventListener("mouseenter", function () {
      drop.classList.add("on-mouse-over");
    });
    dropBody.addEventListener("mouseleave", function () {
      drop.classList.remove("on-mouse-over");
    });
  }
}

try {
  dropdown();
} catch (e) {
  console.log(e);
}
//dropdown

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
              spaceBetween: 40,
            },
            1170: {
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
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 992px)");
    let desktop = window.matchMedia(
      "(min-width: 993px) and (max-width: 4000px)"
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

//preloader
if (document.querySelector(".preloader")) {
  const loader = document.querySelector(".preloader");
  loader.style.top = document.querySelector(".header").clientHeight + "px";
  hidescroll();

  window.onload = function () {
    document.body.classList.add("loaded_hiding");
    showscroll();
    window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
    }, 300);
  };
  setTimeout(function() {
    document.body.classList.remove("loaded_hiding");
  }, 5000)
}
//preloader

//blog-article social
function placeAbsoluteBlogSocials() {
  const socialsContainer = document.querySelector(".blog-article__socials");
  const blogArticle = document.querySelector(".blog-article");
  const blogHeroContainer = document.querySelector(".blog-article__hero");
  const blogContentContainer = document.querySelector(".blog-article__content");

  if (innerWidth > 1400) {
    placeCoord();
  }

  window.addEventListener("resize", function () {
    if (innerWidth > 1400) {
      placeCoord();
    } else if (innerWidth < 1400) {
      removeCoord();
    }
  });

  function placeCoord() {
    socialsContainer.classList.add("absolute");
    socialsContainer.style.top = `${blogContentContainer.offsetTop}px`;
    socialsContainer.style.left = `${
      (blogArticle.offsetWidth - blogHeroContainer.offsetWidth) / 2
    }px`;
  }

  function removeCoord() {
    socialsContainer.classList.remove("absolute");
  }
}

if (document.querySelector(".blog-article__socials")) {
  placeAbsoluteBlogSocials();
}
//blog-article social
