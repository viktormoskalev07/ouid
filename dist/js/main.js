function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),window.onload=function(){pagescroll()},nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){header.classList.add("fixed-header"),hplace=document.querySelector(".header-place");let e=header.offsetHeight+"px";hplace.style.height=e,window.addEventListener("resize",(function(t){e!==header.offsetHeight+"px"&&(e=header.offsetHeight+"px",hplace.style.height=e)}));let t=0;window.addEventListener("scroll",(function(){t<pageYOffset&pageYOffset>header.offsetHeight?(header.style.transform="translateY(-100%)",header.style.boxShadow="none"):0==pageYOffset?header.style.boxShadow="none":(header.style.transform="none",header.style.boxShadow="0px 4px 4px 0px rgba(34, 60, 80, 0.18)"),t=pageYOffset}))}const form=document.querySelectorAll(".order-form"),modal=document.getElementById("modal");function ajaxform(e){const t=this.dataset.emailto;e.preventDefault();let o=this.querySelector(".formstatus");o.innerHTML='<class="load-form">Connecting ...';const n=this.querySelector('input[name="email"]'),i=n.value,s=new XMLHttpRequest;n.style="border:solid red 1px ; opacity:0.9",s.addEventListener("load",(function(){o.innerHTML=s.response,n.style="border:solid green 1px",setTimeout(()=>{o.innerHTML="",n.style=""},4e3)})),s.open("POST","wp-content/themes/SmartUiOuid/mail.php",!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),s.send("email="+encodeURIComponent(i)+"&emailto="+encodeURIComponent(t))}for(i=0;i<form.length;i++)form[i].addEventListener("submit",ajaxform);function accordionInit(){window.addEventListener("load",(function(){const e=document.querySelector(".accordion"),t=e.querySelectorAll(".accordion__item"),o=t=>{const o=e.querySelector(".is-open");n(t),o&&o!==t&&n(o)};t.forEach(e=>{const t=e.querySelector(".accordion__title-text");t.addEventListener("click",t=>{o(e)}),t.addEventListener("keydown",t=>{"Enter"===t.code&&o(e)})});const n=e=>{const t=e.querySelector(".accordion__body");e.classList.contains("is-open")?(t.removeAttribute("style"),e.classList.remove("is-open")):(t.style.height=t.scrollHeight+"px",e.classList.add("is-open"))}}))}function dropdown(){const e=document.querySelector(".dropdown__activator");e.addEventListener("click",(function(t){target=t.target.classList.contains("dropdown__activator"),((target=t.target.classList.contains("dropdown__activator"))||(target=t.target.tagName="svg"))&&e.classList.toggle("dropdown_open")}))}document.querySelector(".accordion")&&accordionInit();try{dropdown()}catch(e){console.log(e)}if(function(){let e=Swiper,t=!1;function o(){let o=window.matchMedia("(min-width: 0px) and (max-width: 1200px)"),n=window.matchMedia("(min-width: 1200px) and (max-width: 40000px)");o.matches?t||(t=!0,e=new Swiper(".swiper-categories",{slidesPerView:1,autoplay:{delay:3e3},loop:!0,spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1.5,spaceBetween:20},700:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:40},1170:{slidesPerView:3,spaceBetween:50}}})):n.matches&&(t&&e.destroy(),t=!1)}document.querySelector(".swiper-categories")&&(window.addEventListener("load",(function(){o()})),window.addEventListener("resize",(function(){o()})))}(),function(){let e=Swiper,t=!1;function o(){let o=window.matchMedia("(min-width: 0px) and (max-width: 992px)"),n=window.matchMedia("(min-width: 993px) and (max-width: 4000px)");o.matches?t||(t=!0,e=new Swiper(".swiper-accessories",{slidesPerView:1,loop:!0,autoplay:{delay:3e3},spaceBetween:10,navigation:{nextEl:".swiper-button-next-accessories",prevEl:".swiper-button-prev-accessories"},breakpoints:{320:{slidesPerView:1.5,spaceBetween:20},700:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:50}}})):n.matches&&(t&&e.destroy(),t=!1)}document.querySelector(".swiper-accessories")&&(window.addEventListener("load",(function(){o()})),window.addEventListener("resize",(function(){o()})))}(),document.querySelector(".preloader")){document.querySelector(".preloader").style.top=document.querySelector(".header").clientHeight+"px",hidescroll(),window.onload=function(){document.body.classList.add("loaded_hiding"),showscroll(),window.setTimeout((function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")}),300)},setTimeout((function(){document.body.classList.remove("loaded_hiding")}),5e3)}function placeAbsoluteBlogSocials(){const e=document.querySelector(".blog-article__socials"),t=document.querySelector(".blog-article"),o=document.querySelector(".blog-article__hero"),n=document.querySelector(".blog-article__content");function i(){e.classList.add("absolute"),e.style.top=n.offsetTop+"px",e.style.left=(t.offsetWidth-o.offsetWidth)/2+"px"}innerWidth>1400&&i(),window.addEventListener("resize",(function(){innerWidth>1400?i():innerWidth<1400&&e.classList.remove("absolute")}))}document.querySelector(".blog-article__socials")&&placeAbsoluteBlogSocials();