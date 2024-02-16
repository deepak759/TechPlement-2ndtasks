

import facebookData from "./data/facebookData.js";
import instaData from "./data/instaData.js";
import allData from "./data/allData.js";
import tweetsData from "./data/tweetsData.js";
import suggestedAccounts from "./data/suggestedAccounts.js";




document.addEventListener("DOMContentLoaded", function () {
  const buttons = {
    ap: allData,
    ip: instaData.posts,
    fp: facebookData.posts,
    tp: tweetsData.posts,
    a_p: allData,
    i_p: instaData.posts,
    f_p: facebookData.posts,
    t_p: tweetsData.posts,
  };

  const suggested = document.getElementById("suggested-accounts");

  suggestedAccounts.forEach((item) => {
    const box = document.createElement("div");
    const image = document.createElement("img");
    const user = document.createElement("h3");
    const link = document.createElement("a");

    // Styling for circular profile picture
    image.classList.add("profile-pic1");
    box.classList.add("box");
    image.src = item.profilePic;
    image.alt = "Profile Pic";

    // Styling for user name
    user.textContent = item.name;

    // Set link properties
    link.href = item.link;
    link.textContent = "Follow"; 
    link.target = "_blank";
    link.classList.add("follow");
   
    box.appendChild(image);
    box.appendChild(user);
    box.appendChild(link);
    suggested.appendChild(box);
  });

  const cards = document.getElementById("app");

  const handleClick = (data) => {
    cards.innerHTML = "";
    data.forEach((item) => {
    

      const card = document.createElement("div");
      card.classList.add("card");

      const top = document.createElement("div");
      top.classList.add("top");

      const userDetails = document.createElement("div");
      userDetails.classList.add("userDetails");

      const profile_img = document.createElement("div");
      profile_img.classList.add("profile_img");

      const image = document.createElement("img");
      image.classList.add("cover");
      if (item.source == "Instagram") {
        image.src = "./assest/insta.png";
      }else if(item.source=='Twitter'){
        image.src='./assest/twitter.png'
      }else{
        image.src='./assest/Fcaebook.png'

      }
      profile_img.appendChild(image);

      const line = document.createElement("h3");
      line.innerText = ` From ${item.source}`;

      userDetails.appendChild(profile_img);
      userDetails.appendChild(line);

      const dots = document.createElement("div");
      const dotimage = document.createElement("img");
      dotimage.classList.add("dot");
      dotimage.src = "./assest/dot.png";
      dots.appendChild(dotimage);

      top.appendChild(userDetails);
      top.appendChild(dots);
      card.appendChild(top);

      const imageBx = document.createElement("div");
      imageBx.classList.add("imgBx");
      const image2 = document.createElement("img");
      image2.classList.add("cover");
      image2.src = item.imageUrl;
      imageBx.appendChild(image2);
      card.appendChild(imageBx);

      const actionbtn = document.createElement("div");
      actionbtn.classList.add("actionBtns");
      const left = document.createElement("div");
      left.classList.add("left");
      const heart = document.createElement("img");
      heart.classList.add("heart");
      heart.src = "./assest/heart.png";
      const comment = document.createElement("img");
      comment.src = "./assest/comment.png";
      const share = document.createElement("img");
      share.src = "./assest/share.png";
      left.appendChild(heart);
      left.appendChild(comment);
      left.appendChild(share);
      actionbtn.appendChild(left);

      const right = document.createElement("div");
      right.classList.add("right");
      const image3 = document.createElement("img");
      image3.src = "./assest/bookmark.png";
      right.appendChild(image3);
      actionbtn.appendChild(right);

      const likes = document.createElement("h4");
      likes.classList.add("likes");
      likes.textContent =`Likes: ${item.likes}`;
      const caption = document.createElement("h4");
      caption.classList.add("message");
      caption.innerText = `caption: ${item.caption}`;
      const comments = document.createElement("h4");
      comments.classList.add("comment");
      comments.textContent = `Commnets: ${item.commentsCount} `;



      card.appendChild(actionbtn);
      card.appendChild(likes);
      card.appendChild(caption);
      card.appendChild(comments);
      cards.appendChild(card);
    });
  };
  handleClick(buttons.ap);
  Object.keys(buttons).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    button.onclick = () => handleClick(buttons[buttonId]);
  });
});
