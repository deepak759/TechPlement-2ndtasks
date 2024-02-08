import facebookData from "../data/facebookData.js";
import instaData from "../data/instaData.js";
import twitterData from "../data/twitter.js";

document.addEventListener("DOMContentLoaded", function () {
  const data = [facebookData, instaData, twitterData];
  const card = document.getElementById("profile");

  data.forEach((element) => {
    const container = document.createElement("div");
    const profilePic = document.createElement("img");
    const username = document.createElement("h1");
    const followers = document.createElement("h3");
    const following = document.createElement("h3");
    const postCount = document.createElement("h3");
    profilePic.src = element.profilePic;
    username.textContent = `Username: ${element.username}`;
    followers.textContent = `Follwers: ${element.followers}`;
    following.textContent = `Following: ${element.following}`;
    postCount.textContent = `Posts: ${element.posts.length}`;
    container.appendChild(profilePic);
    container.appendChild(username);
    container.appendChild(followers);
    container.appendChild(following);
    container.appendChild(postCount);
    card.appendChild(container);
  });
});
