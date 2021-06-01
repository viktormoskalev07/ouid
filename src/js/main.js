body=document.querySelector("body");
html=document.querySelector("html");
header=document.querySelector("header");
btnMenu=document.querySelector(".btn-menu");

window.onload= function(){
  pagescroll(); 
}

// мобильное меню
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").addEventListener("click" , togglenav);
document.querySelector(".nav-menu").onclick = closenav;

document.querySelector(".nav-background").onclick = closenav;
function closenav(){
  nav.classList.remove("nav-open");
  btnMenu.style.marginRight="0";
  showscroll();
  
}
function togglenav() {
  nav.classList.toggle("nav-open");
if(nav.classList.contains("nav-open")){
  btnMenu.style.marginRight=window.innerWidth-html.offsetWidth +"px";
  hidescroll();
  
} else {
  showscroll();
  btnMenu.style.marginRight="0";
}
}
// мобильное меню


// отключить прокрутку
function hidescroll(){
  body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
  body.style.overflow="hidden";
}

function showscroll(){
  body.style.paddingRight=0;
  body.style.overflow="visible"
}

let scrolid = 0 ;
function togglescroll(){
  if (scrolid==0){
    body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
    body.style.overflow="hidden";
    scrolid=1;
  } else{
    body.style.paddingRight=0;
    body.style.overflow="visible"
    scrolid=0;
  }
}

// отключить прокрутку

 




 // Появление меню при прокрутке 
function pagescroll(){
  header.classList.add("fixed-header"); //меняем хедер со статика на фиксед только после загрузки страници
  hplace=document.querySelector(".header-place"); // вместо падинга на боди используем пустой блок
  let headerheight=header.offsetHeight+"px"; //получаем текущую высоту хедера
  hplace.style.height=headerheight;  //задаем пустому блоку высоту хедера
  window.addEventListener('resize', function(event){
    if(headerheight!==header.offsetHeight+"px"){
   //меняем высоту пустого блока только если изменилась высота хедера
      headerheight=header.offsetHeight+"px";
      hplace.style.height=headerheight;
    }
  });

  let pscroll = 0;
  window.addEventListener('scroll', function() { 
      if (pscroll<pageYOffset&pageYOffset>header.offsetHeight){
               header.style.transform="translateY(-100%)"; //прячем хедер при прокрутке вниз            
       }else { 
            header.style.transform="none"; //показываем хедер при прокрутке вверх        
       }  
   pscroll=pageYOffset;
 });
}

 //Появление меню при прокрутке






//отправка формы  
let form = document.querySelectorAll('.order-form');

const modal = document.getElementById("modal");

function ajaxform(evt) {
  gtag('event', 'submit', {
    'event_category': 'Form'
  });
  evt.preventDefault();
  let formstatus = this.querySelector('.formstatus');
  formstatus.innerHTML = '<class="load-form">Соедиенеие ...';

  let formData = {
    desc: this.querySelector('input[name="description"]').value,
    name: this.querySelector('input[name="name"]').value,

    phone: this.querySelector('input[name="phone"]').value

  };
  console.log(formData);
  let request = new XMLHttpRequest();

  request.addEventListener('load', function () {

    formstatus.innerHTML = 'Ваша заявка успешно отправлена, ожидайте звонка';

  });

  request.open('POST', '/mail.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));


};



for (i = 0; i < form.length; i++) {
  form[i].addEventListener('submit', ajaxform);
} 
//отправка формы

// accordion

function accordionInit () {
	window.addEventListener("load", function () {
		const accordion = document.querySelector(".accordion");
		const items = accordion.querySelectorAll(".accordion__item");
	
		items.forEach((item) => {
			const title = item.querySelector(".accordion__title");
	
			title.addEventListener("click", (e) => {
				const opened_item = accordion.querySelector(".is-open");
	
				toggle_item(item);
	
				if (opened_item && opened_item !== item) {
					toggle_item(opened_item);
				}
			});
		});
	
		const toggle_item = (item) => {
			const body = item.querySelector(".accordion__body");
			const content = item.querySelector(".accordion__content");
	
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

if (document.querySelector('.accordion')) {
	accordionInit()
}
// accordion

 //dropdown

function dropdown() {
  const drop = document.querySelector(".dropdown__activator");
  drop.addEventListener("click", function () {
    drop.classList.toggle("dropdown_open");
  });
}

try {
  dropdown();
} catch (e) {
  console.log(e);
}
//dropdown