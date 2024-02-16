
import instaData from "./instaData.js";
import facebookData from "./facebookData.js";
import tweetsData from "../data/tweetsData.js";

const allData = [];
const mixData = (instaData, facebookData,tweetsData) => {
  const maxLength = Math.max(instaData.length, facebookData.length,tweetsData.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < instaData.length) {
      allData.push(instaData[i]);
    }

    if (i < facebookData.length) {
      allData.push(facebookData[i]);
    }
    if (i < tweetsData.length) {
      allData.push(tweetsData[i]);
    }
  }
};

mixData(instaData.posts, facebookData.posts,tweetsData.posts);
export default allData;
