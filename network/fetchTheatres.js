const cheerio = require("react-native-cheerio");
const axios = require("axios");

export default fetchTheatres = (url) =>
  new Promise((resolve, reject) => {
    let theatres = [];

    axios
      .get(url)
      .then((res) => {
        try {
          const $ = cheerio.load(res.data, { xmlMode: true });

          $(".theatre-single").each(function () {
            const theatre = {};

            theatre.title = $(this).find(".title").text().trim();
            theatre.url = $(this).find(".title").attr("href");

            const contactInfo = $(this).find(".address").text();

            theatre.address = contactInfo.split("Tel: ")[0]
              ? contactInfo.split("Tel: ")[0].trim().replace("Adres: ", "")
              : "";
            theatre.tel = contactInfo.split("Tel: ")[1]
              ? contactInfo.split("Tel: ")[1].trim()
              : "";

            featuresObject = {};

            $(this)
              .find("ul")
              .find("li")
              .each(function (index) {
                if (index === 0) {
                  featuresObject.three_d =
                    $(this).find(".icon-check").length > 0;
                } else if (index === 1) {
                  featuresObject.aircond =
                    $(this).find(".icon-check").length > 0;
                } else if (index === 2) {
                  featuresObject.restaurant =
                    $(this).find(".icon-check").length > 0;
                } else if (index === 3) {
                  featuresObject.dolby = $(this).find(".icon-check").length > 0;
                } else if (index === 4) {
                  featuresObject.phone_res =
                    $(this).find(".icon-check").length > 0;
                } else if (index === 5) {
                  featuresObject.parking =
                    $(this).find(".icon-check").length > 0;
                } else {
                  return;
                }
              });

            theatre.features = featuresObject;
            theatres.push(theatre);
          });
          resolve(theatres);
        } catch (e) {
          reject(e.message);
        }
      })
      .catch((e) => reject(e.message));
  });
