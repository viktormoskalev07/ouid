function instagramIntegration() {
  let xhr = new XMLHttpRequest();
  const container = document.querySelector("#instagam-cont");
  const instaUserName = document.querySelectorAll(".instagram__user-name"); 
  const instaImg = document.querySelectorAll(".instagram__image img");
  const instaOld = document.querySelectorAll(".instagram__img__old");

  // put here your instagram feed id from curator io
  //const INST_FEED_ID = '16ffe87b-cb7e-4091-8ff6-bd0b35f8ded6';
  const instPost = container.getAttribute('data-instagram-post');

  xhr.onload = function() {
    if (xhr.status === 200) {
      let posts = JSON.parse(xhr.response).posts;
      if(posts){
        for (let i = 0; i < 4; i++) { 
          try{
            const post = posts[i];  
            instaUserName[i].innerHTML = "@"+post.user_full_name;  
            instaImg[i].src=post.image;   
          }catch (e){
            console.log(e);
          } 
        }
      }
    }
  };
  xhr.open("GET", instPost);
  xhr.send();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", instagramIntegration());
} else {
  instagramIntegration();
}
