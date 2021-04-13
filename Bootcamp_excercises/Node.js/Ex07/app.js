const url = "https://dog.ceo/api/breeds/image/random";
const axios = require("axios");
const request = require("request");
const fetch = require("node-fetch");
// ------------- axios -------------------------------
const getDog = async () => {
  try {
    const response = await axios.get(url);
    console.log("provided by axios:", response.data.message);
  } catch (e) {
    console.log("unable to connect");
  }
};

getDog();
// ------------- request -----------------------------
request({ url: url }, (error, response) => {
  if (error) {
    console.log("unable to connect");
  } else {
    const data = JSON.parse(response.body);
    console.log("provided by request:", data.message);
  }
});
// ------------- 3rd party ---------------------------

fetch(url)
  .then((res) => res.text())
  .then((body) =>
    console.log("provided by node-fetch:", JSON.parse(body).message)
  )
  .catch(() => console.log("unable to connect"));
