
import instaData from "./instaData.js";
import facebookData from "./facebookData.js";
import twitterData from "./twitter.js";

const allData = [];
const mixData = (instaData, facebookData,twitterData) => {
  const maxLength = Math.max(instaData.length, facebookData.length,twitterData.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < instaData.length) {
      allData.push(instaData[i]);
    }

    if (i < facebookData.length) {
      allData.push(facebookData[i]);
    }
    if (i < twitterData.length) {
      allData.push(twitterData[i]);
    }
  }
};

mixData(instaData.posts, facebookData.posts,twitterData.posts);
export default allData;
