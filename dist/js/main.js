function closenav(){nav.classList.remove("nav-open"),btnMenu.style.marginRight="0",showscroll()}function togglenav(){nav.classList.toggle("nav-open"),nav.classList.contains("nav-open")?(btnMenu.style.marginRight=window.innerWidth-html.offsetWidth+"px",hidescroll()):(showscroll(),btnMenu.style.marginRight="0")}function hidescroll(){body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden"}function showscroll(){body.style.paddingRight=0,body.style.overflow="visible"}body=document.querySelector("body"),html=document.querySelector("html"),header=document.querySelector("header"),btnMenu=document.querySelector(".btn-menu"),window.onload=function(){pagescroll()},nav=document.querySelector(".nav"),document.querySelector(".btn-menu").addEventListener("click",togglenav),document.querySelector(".nav-background").onclick=closenav;let scrolid=0;function togglescroll(){0==scrolid?(body.style.paddingRight=window.innerWidth-html.offsetWidth+"px",body.style.overflow="hidden",scrolid=1):(body.style.paddingRight=0,body.style.overflow="visible",scrolid=0)}function pagescroll(){header.classList.add("fixed-header"),hplace=document.querySelector(".header-place");let e=header.offsetHeight+"px";hplace.style.height=e,window.addEventListener("resize",(function(t){e!==header.offsetHeight+"px"&&(e=header.offsetHeight+"px",hplace.style.height=e)}));let t=0;window.addEventListener("scroll",(function(){t<pageYOffset&pageYOffset>header.offsetHeight?header.style.transform="translateY(-100%)":header.style.transform="none",t=pageYOffset}))}let form=document.querySelectorAll(".order-form");const modal=document.getElementById("modal");function ajaxform(e){gtag("event","submit",{event_category:"Form"}),e.preventDefault();let t=this.querySelector(".formstatus");t.innerHTML='<class="load-form">Соедиенеие ...';let o={desc:this.querySelector('input[name="description"]').value,name:this.querySelector('input[name="name"]').value,phone:this.querySelector('input[name="phone"]').value};console.log(o);let n=new XMLHttpRequest;n.addEventListener("load",(function(){t.innerHTML="Ваша заявка успешно отправлена, ожидайте звонка"})),n.open("POST","/mail.php",!0),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.send("name="+encodeURIComponent(o.name)+"&phone="+encodeURIComponent(o.phone)+"&desc="+encodeURIComponent(o.desc))}for(i=0;i<form.length;i++)form[i].addEventListener("submit",ajaxform);function accordionInit(){window.addEventListener("load",(function(){const e=document.querySelector(".accordion");e.querySelectorAll(".accordion__item").forEach((o=>{o.querySelector(".accordion__title-text").addEventListener("click",(n=>{const s=e.querySelector(".is-open");t(o),s&&s!==o&&t(s)}))}));const t=e=>{const t=e.querySelector(".accordion__body");e.querySelector(".accordion__content");e.classList.contains("is-open")?(t.removeAttribute("style"),e.classList.remove("is-open")):(t.style.height=t.scrollHeight+"px",e.classList.add("is-open"))}}))}function dropdown(){const e=document.querySelector(".dropdown__activator"),t=document.querySelector(".dropdown");e.addEventListener("click",(function(){e.classList.toggle("dropdown_open")})),t.addEventListener("mouseenter",(function(){e.classList.add("on-mouse-over")})),t.addEventListener("mouseleave",(function(){e.classList.remove("on-mouse-over")}))}document.querySelector(".accordion")&&accordionInit();try{dropdown()}catch(e){console.log(e)}const swiper=new Swiper(".swiper-categories",{slidesPerView:1,spaceBetween:10,breakpoints:{320:{slidesPerView:1,spaceBetween:20},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:4,spaceBetween:40},1170:{spaceBetween:50}}}),swiperAccessories=new Swiper(".swiper-accessories",{slidesPerView:1,spaceBetween:10,breakpoints:{320:{slidesPerView:1,spaceBetween:20},576:{slidesPerView:2,spaceBetween:30},992:{slidesPerView:3,spaceBetween:40}}});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2xvc2VuYXYiLCJuYXYiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJidG5NZW51Iiwic3R5bGUiLCJtYXJnaW5SaWdodCIsInNob3dzY3JvbGwiLCJ0b2dnbGVuYXYiLCJ0b2dnbGUiLCJjb250YWlucyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJodG1sIiwib2Zmc2V0V2lkdGgiLCJoaWRlc2Nyb2xsIiwiYm9keSIsInBhZGRpbmdSaWdodCIsIm92ZXJmbG93IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaGVhZGVyIiwib25sb2FkIiwicGFnZXNjcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNsaWNrIiwic2Nyb2xpZCIsInRvZ2dsZXNjcm9sbCIsImFkZCIsImhwbGFjZSIsImhlYWRlcmhlaWdodCIsIm9mZnNldEhlaWdodCIsImhlaWdodCIsImV2ZW50IiwicHNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwidHJhbnNmb3JtIiwiZm9ybSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiYWpheGZvcm0iLCJldnQiLCJndGFnIiwiZXZlbnRfY2F0ZWdvcnkiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1zdGF0dXMiLCJ0aGlzIiwiaW5uZXJIVE1MIiwiZm9ybURhdGEiLCJkZXNjIiwidmFsdWUiLCJuYW1lIiwicGhvbmUiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaSIsImxlbmd0aCIsImFjY29yZGlvbkluaXQiLCJhY2NvcmRpb24iLCJmb3JFYWNoIiwiaXRlbSIsImUiLCJvcGVuZWRfaXRlbSIsInRvZ2dsZV9pdGVtIiwicmVtb3ZlQXR0cmlidXRlIiwic2Nyb2xsSGVpZ2h0IiwiZHJvcGRvd24iLCJkcm9wIiwiZHJvcEJvZHkiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiYnJlYWtwb2ludHMiLCIzMjAiLCI1NzYiLCI5OTIiLCIxMTcwIiwic3dpcGVyQWNjZXNzb3JpZXMiXSwibWFwcGluZ3MiOiJBQWVBLFNBQVNBLFdBQ1BDLElBQUlDLFVBQVVDLE9BQU8sWUFDckJDLFFBQVFDLE1BQU1DLFlBQVksSUFDMUJDLGFBR0YsU0FBU0MsWUFDUFAsSUFBSUMsVUFBVU8sT0FBTyxZQUNwQlIsSUFBSUMsVUFBVVEsU0FBUyxhQUN4Qk4sUUFBUUMsTUFBTUMsWUFBWUssT0FBT0MsV0FBV0MsS0FBS0MsWUFBYSxLQUM5REMsZUFHQVIsYUFDQUgsUUFBUUMsTUFBTUMsWUFBWSxLQU81QixTQUFTUyxhQUNQQyxLQUFLWCxNQUFNWSxhQUFhTixPQUFPQyxXQUFXQyxLQUFLQyxZQUFhLEtBQzVERSxLQUFLWCxNQUFNYSxTQUFTLFNBR3RCLFNBQVNYLGFBQ1BTLEtBQUtYLE1BQU1ZLGFBQWEsRUFDeEJELEtBQUtYLE1BQU1hLFNBQVMsVUEzQ3RCRixLQUFLRyxTQUFTQyxjQUFjLFFBQzVCUCxLQUFLTSxTQUFTQyxjQUFjLFFBQzVCQyxPQUFPRixTQUFTQyxjQUFjLFVBQzlCaEIsUUFBUWUsU0FBU0MsY0FBYyxhQUUvQlQsT0FBT1csT0FBUSxXQUNiQyxjQUlGdEIsSUFBTWtCLFNBQVNDLGNBQWMsUUFDN0JELFNBQVNDLGNBQWMsYUFBYUksaUJBQWlCLFFBQVVoQixXQUcvRFcsU0FBU0MsY0FBYyxtQkFBbUJLLFFBQVV6QixTQWdDcEQsSUFBSTBCLFFBQVUsRUFDZCxTQUFTQyxlQUNNLEdBQVRELFNBQ0ZWLEtBQUtYLE1BQU1ZLGFBQWFOLE9BQU9DLFdBQVdDLEtBQUtDLFlBQWEsS0FDNURFLEtBQUtYLE1BQU1hLFNBQVMsU0FDcEJRLFFBQVEsSUFFUlYsS0FBS1gsTUFBTVksYUFBYSxFQUN4QkQsS0FBS1gsTUFBTWEsU0FBUyxVQUNwQlEsUUFBUSxHQVlaLFNBQVNILGFBQ1BGLE9BQU9uQixVQUFVMEIsSUFBSSxnQkFD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QUVsQkksSUFBSyxDQUNETCxjQUFlLEVBQ2ZDLGFBQWMsSUFFbEJLLEtBQU0sQ0FDRkwsYUFBYyxPQUtwQk0sa0JBQW9CLElBQUlSLE9BQU8sc0JBQXVCLENBQ3hEQyxjQUFlLEVBQ2ZDLGFBQWMsR0FDZEMsWUFBYSxDQUNUQyxJQUFLLENBQ0RILGNBQWUsRUFDZkMsYUFBYyxJQUVsQkcsSUFBSyxDQUNESixjQUFlLEVBQ2ZDLGFBQWMsSUFFbEJJLElBQUssQ0FDREwsY0FBZSxFQUNmQyxhQUFjIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5odG1sPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xyXG5oZWFkZXI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlclwiKTtcclxuYnRuTWVudT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1tZW51XCIpO1xyXG5cclxud2luZG93Lm9ubG9hZD0gZnVuY3Rpb24oKXtcclxuICBwYWdlc2Nyb2xsKCk7IFxyXG59XHJcblxyXG4vLyDQvNC+0LHQuNC70YzQvdC+0LUg0LzQtdC90Y5cclxubmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZcIik7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLW1lbnVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCB0b2dnbGVuYXYpO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1tZW51XCIpLm9uY2xpY2sgPSBjbG9zZW5hdjtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2LWJhY2tncm91bmRcIikub25jbGljayA9IGNsb3NlbmF2O1xyXG5mdW5jdGlvbiBjbG9zZW5hdigpe1xyXG4gIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LW9wZW5cIik7XHJcbiAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodD1cIjBcIjtcclxuICBzaG93c2Nyb2xsKCk7XHJcbiAgXHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlbmF2KCkge1xyXG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LW9wZW5cIik7XHJcbmlmKG5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtb3BlblwiKSl7XHJcbiAgYnRuTWVudS5zdHlsZS5tYXJnaW5SaWdodD13aW5kb3cuaW5uZXJXaWR0aC1odG1sLm9mZnNldFdpZHRoICtcInB4XCI7XHJcbiAgaGlkZXNjcm9sbCgpO1xyXG4gIFxyXG59IGVsc2Uge1xyXG4gIHNob3dzY3JvbGwoKTtcclxuICBidG5NZW51LnN0eWxlLm1hcmdpblJpZ2h0PVwiMFwiO1xyXG59XHJcbn1cclxuLy8g0LzQvtCx0LjQu9GM0L3QvtC1INC80LXQvdGOXHJcblxyXG5cclxuLy8g0L7RgtC60LvRjtGH0LjRgtGMINC/0YDQvtC60YDRg9GC0LrRg1xyXG5mdW5jdGlvbiBoaWRlc2Nyb2xsKCl7XHJcbiAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9d2luZG93LmlubmVyV2lkdGgtaHRtbC5vZmZzZXRXaWR0aCArXCJweFwiO1xyXG4gIGJvZHkuc3R5bGUub3ZlcmZsb3c9XCJoaWRkZW5cIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd3Njcm9sbCgpe1xyXG4gIGJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0PTA7XHJcbiAgYm9keS5zdHlsZS5vdmVyZmxvdz1cInZpc2libGVcIlxyXG59XHJcblxyXG5sZXQgc2Nyb2xpZCA9IDAgO1xyXG5mdW5jdGlvbiB0b2dnbGVzY3JvbGwoKXtcclxuICBpZiAoc2Nyb2xpZD09MCl7XHJcbiAgICBib2R5LnN0eWxlLnBhZGRpbmdSaWdodD13aW5kb3cuaW5uZXJXaWR0aC1odG1sLm9mZnNldFdpZHRoICtcInB4XCI7XHJcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCI7XHJcbiAgICBzY3JvbGlkPTE7XHJcbiAgfSBlbHNle1xyXG4gICAgYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQ9MDtcclxuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3c9XCJ2aXNpYmxlXCJcclxuICAgIHNjcm9saWQ9MDtcclxuICB9XHJcbn1cclxuXHJcbi8vINC+0YLQutC70Y7Rh9C40YLRjCDQv9GA0L7QutGA0YPRgtC60YNcclxuXHJcbiBcclxuXHJcblxyXG5cclxuXHJcbiAvLyDQn9C+0Y/QstC70LXQvdC40LUg0LzQtdC90Y4g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSBcclxuZnVuY3Rpb24gcGFnZXNjcm9sbCgpe1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtaGVhZGVyXCIpOyAvL9C80LXQvdGP0LXQvCDRhdC10LTQtdGAINGB0L4g0YHRgtCw0YLQuNC60LAg0L3QsCDRhNC40LrRgdC10LQg0YLQvtC70YzQutC+INC/0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtC4XHJcbiAgaHBsYWNlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLXBsYWNlXCIpOyAvLyDQstC80LXRgdGC0L4g0L/QsNC00LjQvdCz0LAg0L3QsCDQsdC+0LTQuCDQuNGB0L/QvtC70YzQt9GD0LXQvCDQv9GD0YHRgtC+0Lkg0LHQu9C+0LpcclxuICBsZXQgaGVhZGVyaGVpZ2h0PWhlYWRlci5vZmZzZXRIZWlnaHQrXCJweFwiOyAvL9C/0L7Qu9GD0YfQsNC10Lwg0YLQtdC60YPRidGD0Y4g0LLRi9GB0L7RgtGDINGF0LXQtNC10YDQsFxyXG4gIGhwbGFjZS5zdHlsZS5oZWlnaHQ9aGVhZGVyaGVpZ2h0OyAgLy/Qt9Cw0LTQsNC10Lwg0L/Rg9GB0YLQvtC80YMg0LHQu9C+0LrRgyDQstGL0YHQvtGC0YMg0YXQtdC00LXRgNCwXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIGlmKGhlYWRlcmhlaWdodCE9PWhlYWRlci5vZmZzZXRIZWlnaHQrXCJweFwiKXtcclxuICAgLy/QvNC10L3Rj9C10Lwg0LLRi9GB0L7RgtGDINC/0YPRgdGC0L7Qs9C+INCx0LvQvtC60LAg0YLQvtC70YzQutC+INC10YHQu9C4INC40LfQvNC10L3QuNC70LDRgdGMINCy0YvRgdC+0YLQsCDRhdC10LTQtdGA0LBcclxuICAgICAgaGVhZGVyaGVpZ2h0PWhlYWRlci5vZmZzZXRIZWlnaHQrXCJweFwiO1xyXG4gICAgICBocGxhY2Uuc3R5bGUuaGVpZ2h0PWhlYWRlcmhlaWdodDtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbGV0IHBzY3JvbGwgPSAwO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHsgXHJcbiAgICAgIGlmIChwc2Nyb2xsPHBhZ2VZT2Zmc2V0JnBhZ2VZT2Zmc2V0PmhlYWRlci5vZmZzZXRIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUudHJhbnNmb3JtPVwidHJhbnNsYXRlWSgtMTAwJSlcIjsgLy/Qv9GA0Y/Rh9C10Lwg0YXQtdC00LXRgCDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INCy0L3QuNC3ICAgICAgICAgICAgXHJcbiAgICAgICB9ZWxzZSB7IFxyXG4gICAgICAgICAgICBoZWFkZXIuc3R5bGUudHJhbnNmb3JtPVwibm9uZVwiOyAvL9C/0L7QutCw0LfRi9Cy0LDQtdC8INGF0LXQtNC10YAg0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDQstCy0LXRgNGFICAgICAgICBcclxuICAgICAgIH0gIFxyXG4gICBwc2Nyb2xsPXBhZ2VZT2Zmc2V0O1xyXG4gfSk7XHJcbn1cclxuXHJcbiAvL9Cf0L7Rj9Cy0LvQtdC90LjQtSDQvNC10L3RjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8v0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLICBcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXItZm9ybScpO1xyXG5cclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsXCIpO1xyXG5cclxuZnVuY3Rpb24gYWpheGZvcm0oZXZ0KSB7XHJcbiAgZ3RhZygnZXZlbnQnLCAnc3VibWl0Jywge1xyXG4gICAgJ2V2ZW50X2NhdGVnb3J5JzogJ0Zvcm0nXHJcbiAgfSk7XHJcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGZvcm1zdGF0dXMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5mb3Jtc3RhdHVzJyk7XHJcbiAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAnPGNsYXNzPVwibG9hZC1mb3JtXCI+0KHQvtC10LTQuNC10L3QtdC40LUgLi4uJztcclxuXHJcbiAgbGV0IGZvcm1EYXRhID0ge1xyXG4gICAgZGVzYzogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZSxcclxuICAgIG5hbWU6IHRoaXMucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWx1ZSxcclxuXHJcbiAgICBwaG9uZTogdGhpcy5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS52YWx1ZVxyXG5cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcclxuICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZm9ybXN0YXR1cy5pbm5lckhUTUwgPSAn0JLQsNGI0LAg0LfQsNGP0LLQutCwINGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdCwLCDQvtC20LjQtNCw0LnRgtC1INC30LLQvtC90LrQsCc7XHJcblxyXG4gIH0pO1xyXG5cclxuICByZXF1ZXN0Lm9wZW4oJ1BPU1QnLCAnL21haWwucGhwJywgdHJ1ZSk7XHJcbiAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04Jyk7XHJcbiAgcmVxdWVzdC5zZW5kKCduYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEubmFtZSkgKyAnJnBob25lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEucGhvbmUpICsgJyZkZXNjPScgKyBlbmNvZGVVUklDb21wb25lbnQoZm9ybURhdGEuZGVzYykpO1xyXG5cclxuXHJcbn07XHJcblxyXG5cclxuXHJcbmZvciAoaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSsrKSB7XHJcbiAgZm9ybVtpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhamF4Zm9ybSk7XHJcbn0gXHJcbi8v0L7RgtC/0YDQsNCy0LrQsCDRhNC+0YDQvNGLXHJcblxyXG4vLyBhY2NvcmRpb25cclxuXHJcbmZ1bmN0aW9uIGFjY29yZGlvbkluaXQgKCkge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvblwiKTtcclxuXHRcdGNvbnN0IGl0ZW1zID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uX19pdGVtXCIpO1xyXG5cdFxyXG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0XHRjb25zdCB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5hY2NvcmRpb25fX3RpdGxlLXRleHRcIik7XHJcblx0XHJcblx0XHRcdHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IG9wZW5lZF9pdGVtID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3IoXCIuaXMtb3BlblwiKTtcclxuXHRcclxuXHRcdFx0XHR0b2dnbGVfaXRlbShpdGVtKTtcclxuXHRcclxuXHRcdFx0XHRpZiAob3BlbmVkX2l0ZW0gJiYgb3BlbmVkX2l0ZW0gIT09IGl0ZW0pIHtcclxuXHRcdFx0XHRcdHRvZ2dsZV9pdGVtKG9wZW5lZF9pdGVtKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHJcblx0XHRjb25zdCB0b2dnbGVfaXRlbSA9IChpdGVtKSA9PiB7XHJcblx0XHRcdGNvbnN0IGJvZHkgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3JkaW9uX19ib2R5XCIpO1xyXG5cdFx0XHRjb25zdCBjb250ZW50ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmFjY29yZGlvbl9fY29udGVudFwiKTtcclxuXHRcclxuXHRcdFx0aWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtb3BlblwiKSkge1xyXG5cdFx0XHRcdGJvZHkucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XHJcblx0XHRcdFx0aXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtb3BlblwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xyXG5cdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIik7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fSk7XHJcbn1cclxuXHJcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3JkaW9uJykpIHtcclxuXHRhY2NvcmRpb25Jbml0KClcclxufVxyXG4vLyBhY2NvcmRpb25cclxuXHJcbiAvL2Ryb3Bkb3duXHJcblxyXG5mdW5jdGlvbiBkcm9wZG93bigpIHtcclxuICBjb25zdCBkcm9wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kcm9wZG93bl9fYWN0aXZhdG9yXCIpO1xyXG4gIGNvbnN0IGRyb3BCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJylcclxuXHJcbiAgZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZHJvcC5jbGFzc0xpc3QudG9nZ2xlKFwiZHJvcGRvd25fb3BlblwiKTtcclxuICB9KTtcclxuICBcclxuICBkcm9wQm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKSB7XHJcbiAgICBkcm9wLmNsYXNzTGlzdC5hZGQoJ29uLW1vdXNlLW92ZXInKVxyXG4gIH0pXHJcbiAgZHJvcEJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdvbi1tb3VzZS1vdmVyJylcclxuICB9KVxyXG5cclxufVxyXG5cclxudHJ5IHtcclxuICBkcm9wZG93bigpO1xyXG59IGNhdGNoIChlKSB7XHJcbiAgY29uc29sZS5sb2coZSk7XHJcbn1cclxuLy9kcm9wZG93blxyXG5cclxuXHJcbi8vc3dpcGVyXHJcblxyXG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1jYXRlZ29yaWVzXCIsIHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDEwLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDU3Njoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTkyOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMTcwOiB7XHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyQWNjZXNzb3JpZXMgPSBuZXcgU3dpcGVyKFwiLnN3aXBlci1hY2Nlc3Nvcmllc1wiLCB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAxMCxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA1NzY6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk5Mjoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDQwLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuXHJcblxyXG4iXX0=
