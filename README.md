![enter image description here](https://thumbs.gfycat.com/PoliticalPhysicalGossamerwingedbutterfly-mobile.mp4)

# About the Vizyondakiler App

This app displays currently showing movies in theatres in Turkey.

**- First Screen:**
User selects a city

**- Theatres Screen:**
Theatres in selected city are displayed:
_Address, Phone Number, Facilities_

**- Movies Screen:**
Showing movies in selected theatre are displayed:
_Movie poster, Title, Categories, Seances_

**- Movie Details Screen:**
Details of selected movie are displayed:
_Title, Duration, Categories, Movie Review, Cast, Trailer (obtained with [Youtube Search API](https://developers.google.com/youtube/v3/docs/search))_

---

No public API was available for such service, hereby, I scraped the data from [sinemalar.com](https://sinemalar.com) by leveraging [react-native-cheerio](https://www.npmjs.com/package/react-native-cheerio). You are allowed to test the app for educational purposes, yet it is prohibited to distribute it as all the data displayed in the app are **owned & protected** by sinemalar.com. I do not claim any rights to said data.

In order to test the app on your phone, download [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=tr&gl=US) and scan the QR Code below. (Note: iOS version not tested)

![expo qr](https://i.ibb.co/8c4jQt1/download.png)

## Running the code on local machine:

Rename **example.env.config.js** file to **env.config.js** and place your _Youtube Api Key_ in the file.

Install expo if you haven't already:

    npm install --global expo-cli

Then:

    expo start
