const cheerio = require("react-native-cheerio");
const axios = require("axios");

export default fetchMovies = (url) =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        try {
          const $ = cheerio.load(res.data, { xmlMode: true });

          let movies = [];

          $(".movie-single").each(function () {
            const movie = {};

            movie.poster = $(this).find(".thumbnail").find("img").attr("src");
            movie.url = $(this).find(".title").find("a").attr("href");
            movie.title = $(this).find(".title").find("a").text();

            $(this)
              .find(".title")
              .find(".side-info")
              .each(function (index) {
                if (index === 0) movie.originalTitle = $(this).text();
                if (index === 1) {
                  const s = $(this).text().replace("Tür: ", "").trim();
                  if (s !== "") {
                    const categories = s.split(", ");
                    movie.categories = categories;
                  } else {
                    movie.categories = [];
                  }
                }
              });

            let temp = [[]];
            let sessions = [];

            $(this)
              .find(".seance-type")
              .children()
              .each(function (index, item) {
                if (index !== 0 && !$(item).text().trim().includes(":")) {
                  temp.push([]);
                }
                temp[temp.length - 1].push(
                  $(item).text().replace("BİLET AL", "").trim()
                );
              });

            temp.forEach((array) => {
              const session = {};
              session.type = array.shift();
              session.times = array;

              sessions.push(session);
            });

            movie.sessions = sessions;

            movies.push(movie);
          });

          resolve(movies);
        } catch (e) {
          reject(e);
        }
      })
      .catch((e) => reject(e.message));
  });
