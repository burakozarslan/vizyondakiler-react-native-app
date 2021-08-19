const axios = require("axios");
import config from "../env.config";

export default fetchTrailer = (title) =>
  new Promise((resolve, reject) => {
    const query = title.trim().replace(" ", "+") + "+trailer";
    const searchUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=none&q=${query}&key=${config.YOUTUBE_API_KEY}`;

    axios
      .get(searchUrl, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        const trailer = `https://www.youtube.com/watch?v=${res.data.items[0].id.videoId}`;
        resolve(trailer);
      })
      .catch(reject);
  });
