function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),window.onload=function(){pagescroll()},nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){header.classList.add("fixed-header"),hplace=document.querySelector(".header-place");let e=header.offsetHeight+"px";hplace.style.height=e,window.addEventListener("resize",(function(t){e!==header.offsetHeight+"px"&&(e=header.offsetHeight+"px",hplace.style.height=e)}));let t=0;window.addEventListener("scroll",(function(){t<pageYOffset&pageYOffset>header.offsetHeight?(header.style.transform="translateY(-100%)",header.style.boxShadow="none"):(header.style.transform="none",header.style.boxShadow="0px 4px 4px 0px rgba(34, 60, 80, 0.18)"),t=pageYOffset}))}let form=document.querySelectorAll(".order-form");const modal=document.getElementById("modal");function ajaxform(e){gtag("event","submit",{event_category:"Form"}),e.preventDefault();let t=this.querySelector(".formstatus");t.innerHTML='<class="load-form">Соедиенеие ...';let n={desc:this.querySelector('input[name="description"]').value,name:this.querySelector('input[name="name"]').value,phone:this.querySelector('input[name="phone"]').value};console.log(n);let o=new XMLHttpRequest;o.addEventListener("load",(function(){t.innerHTML="Ваша заявка успешно отправлена, ожидайте звонка"})),o.open("POST","/mail.php",!0),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.send("name="+encodeURIComponent(n.name)+"&phone="+encodeURIComponent(n.phone)+"&desc="+encodeURIComponent(n.desc))}for(i=0;i<form.length;i++)form[i].addEventListener("submit",ajaxform);function accordionInit(){window.addEventListener("load",(function(){const e=document.querySelector(".accordion");e.querySelectorAll(".accordion__item").forEach(n=>{n.querySelector(".accordion__title-text").addEventListener("click",o=>{const i=e.querySelector(".is-open");t(n),i&&i!==n&&t(i)})});const t=e=>{const t=e.querySelector(".accordion__body");e.querySelector(".accordion__content");e.classList.contains("is-open")?(t.removeAttribute("style"),e.classList.remove("is-open")):(t.style.height=t.scrollHeight+"px",e.classList.add("is-open"))}}))}function dropdown(){const e=document.querySelector(".dropdown__activator"),t=document.querySelector(".dropdown");innerWidth<992&&e.addEventListener("click",(function(){e.classList.toggle("dropdown_open")})),innerWidth>992&&(t.addEventListener("mouseenter",(function(){e.classList.add("on-mouse-over")})),t.addEventListener("mouseleave",(function(){e.classList.remove("on-mouse-over")})))}document.querySelector(".accordion")&&accordionInit();try{dropdown()}catch(e){console.log(e)}!function(){let e=Swiper,t=!1;function n(){let n=window.matchMedia("(min-width: 0px) and (max-width: 1200px)"),o=window.matchMedia("(min-width: 1201px) and (max-width: 4000px)");n.matches?t||(t=!0,e=new Swiper(".swiper-categories",{slidesPerView:1,autoplay:{delay:3e3},loop:!0,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},700:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:40},1170:{slidesPerView:3,spaceBetween:50}}})):o.matches&&(t&&e.destroy(),t=!1)}window.addEventListener("load",(function(){n()})),window.addEventListener("resize",(function(){n()}))}(),function(){let e=Swiper,t=!1;function n(){let n=window.matchMedia("(min-width: 0px) and (max-width: 992px)"),o=window.matchMedia("(min-width: 993px) and (max-width: 4000px)");n.matches?t||(t=!0,e=new Swiper(".swiper-accessories",{slidesPerView:1,loop:!0,autoplay:{delay:3e3},spaceBetween:10,navigation:{nextEl:".swiper-button-next-accessories",prevEl:".swiper-button-prev-accessories"},breakpoints:{320:{slidesPerView:1,spaceBetween:20},700:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:50}}})):o.matches&&(t&&e.destroy(),t=!1)}window.addEventListener("load",(function(){n()})),window.addEventListener("resize",(function(){n()}))}();