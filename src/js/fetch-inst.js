function instagramIntegration() {
  let xhr = new XMLHttpRequest();
  const container = document.querySelector("#instagam-cont");
  const instaUserName = document.querySelectorAll(".instagram__user-name");
  const instaImg = document.querySelectorAll(".instagram__image img");
  const instaOld = document.querySelectorAll(".instagram__img__old");
  const accountTitle = document.querySelector(".instagram__name-account");

  // put here your instagram feed id from curator io
  //const INST_FEED_ID = '16ffe87b-cb7e-4091-8ff6-bd0b35f8ded6';
  if(container){
 const instPost = container.getAttribute('data-instagram-post');

  // xhr.onload = function() {
   
  //   if (xhr.status === 200) {
  //     let posts = JSON.parse(xhr.response).posts;
  //     if(posts){
  //       accountTitle.innerHTML= "@"+posts[0].user_full_name;
  //       for (let i = 0; i < 4; i++) {
  //         try{
  //           const post = posts[i];
  //           instaUserName[i].innerHTML = "@"+post.user_full_name;
  //           instaImg[i].src=post.image;
  //         }catch (e){
  //           console.log(e);
  //         }
  //       }
  //     }
  //   }
  // };


  //         xhr.open("GET", instPost);
  //         xhr.send();
  //       xhr.onerror = function(e){
  //         e.preventDefault;
  //         console.log('pup')
  //       }
 
  
   
                                      fetch(instPost)
                                          .then((resp)=>{
                                           return  resp.json() 
                                          })
                                          .catch (e => {
                                            console.log('%c change user token in insta settings' , 'font-weight:800; font-size:22px; color: magenta');
                                            console.log('%c   go to edit page , ', '  color: blue');
                                            console.log('%c   finde lield "follow_instagram_feed_id" ,  ', '  color: green');
                                            console.log('%c   and add your id from curator.io ', '  color: blue');
                                        }
                                          )
                                          .then((data1)  => { 
                                            if(data1){
                                              const posts =data1.posts
                                                    accountTitle.innerHTML= "@"+posts[0].user_full_name;
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
                                         });

                           

  }
 
}



if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", instagramIntegration());
} else {
  instagramIntegration();
}
