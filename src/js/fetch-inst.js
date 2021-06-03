function instagramIntegration() {
  let xhr = new XMLHttpRequest();
  let container = document.querySelector("#instagam-cont");

  // put here your instagram feed id from curator io
  const INST_FEED_ID = ''

  xhr.onload = function() {
    if (xhr.status === 200) {
      let posts = JSON.parse(xhr.response).posts;
      if(posts){
        for (let i = 0; i < 4; i++) {
          let post = posts[i];
          let postItem = document.createElement('div');
          postItem.setAttribute('class', 'instagram__item');

          // create/embed <img>
          let imagePost = document.createElement('img');
          let imageSrc = post.image;
          imagePost.setAttribute('src', imageSrc);
          imagePost.setAttribute('alt', 'instagram post image');

          // create userName <p>
          let userNameCaption = document.createElement('p');
          let userName = post.user_full_name
          userNameCaption.setAttribute('class', 'instagram__user-name')
          userNameCaption.innerHTML = `@${userName}`

          postItem.appendChild(imagePost);
          postItem.appendChild(userNameCaption)
  
          container.appendChild(postItem)        
        }
      }
    }
  };
  xhr.open("GET", `https://api.curator.io/v1/feeds/${INST_FEED_ID}/posts`);
  xhr.send();
}

if (document.readyState === "loading") {
  // document.addEventListener("DOMContentLoaded", instagramIntegration());
} else {
  // instagramIntegration();
}