import fetchTrailer from "./fetchTrailer";

const cheerio = require("react-native-cheerio");
const axios = require("axios");

export default fetchMovie = (url) =>
  new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        try {
          const $ = cheerio.load(res.data, { xmlMode: true });

          var movie = {};
          var categories = [];

          movie.title = $("h1").text();
          movie.poster = $(".poster").attr("src");
          movie.description = $(".content-group")
            .find("p")
            .text()
            .replace(/\n|\t/g, "")
            .trim();

          $(".info-group").each(function (index, item) {
            if ($(this).find(".label-title").text().includes("Süre:")) {
              movie.duration = $(this)
                .find(".label")
                .text()
                .replace(/\n| |/g, "")
                .trim();
            }

            if ($(this).find(".label-title").text().includes("Yapımı:")) {
              movie.production = $(this)
                .find(".label")
                .text()
                .replace(/\n| |/g, "")
                .trim();
            }

            if ($(this).find(".label-title").text().includes("Tür:")) {
              movie.production = $(this)
                .find(".label")
                .find("span")
                .each(function (_, item) {
                  categories.push($(item).text().trim());
                });
            }

            movie.categories = categories;
          });

          var artists = [];

          $(".card-vertical").each(function (_, item) {
            const artist = {};

            artist.image = $(item).find("img").attr("data-src");
            artist.name = $(item)
              .find(".card-title")
              .find("span")
              .text()
              .trim();

            artists.push(artist);
          });

          movie.cast = artists;

          fetchTrailer(movie.title)
            .then((trailer) => (movie.trailer = trailer))
            .catch(
              (movie.trailer = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
            );

          resolve(movie);
        } catch (e) {
          reject(e);
        }
      })
      .catch(reject);
  });
