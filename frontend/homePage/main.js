import facebookData from "../data/facebookData.js";
import instaData from "../data/instaData.js";
import allData from "../data/allData.js";
import twitterData from "../data/twitter.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = {
    ap: allData,
    ip: instaData.posts,
    fp: facebookData.posts,
    tp:twitterData.posts
  };

  const card = document.getElementById("app");

  const handleClick = (data) => {
    card.innerHTML = "";
    data.forEach((item) => {
      const container = document.createElement("div");
      const image = document.createElement("img");
      const likes = document.createElement("h3");
      const disLikes = document.createElement("h3");
      image.src = item.imageUrl;
      likes.textContent = ` Likes ${item.likes}`;
      disLikes.textContent = `Dislikes ${item.dislikes}`;
      container.classList.add("container");
      container.appendChild(image);
      container.appendChild(likes);
      container.appendChild(disLikes);
      card.appendChild(container);
    });
  };
  handleClick(buttons.ap);
  Object.keys(buttons).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    button.onclick = () => handleClick(buttons[buttonId]);
  });
});

