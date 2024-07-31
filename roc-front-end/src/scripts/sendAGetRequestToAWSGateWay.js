import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const url = "https://fzcpiig4kg.execute-api.eu-north-1.amazonaws.com/Okane"; // Replace with the URL you want to send a GET request to

const customHeaders = {
  "X-API-Key": process.env.API_GATEWAY_API_KEY,
};

const requestOptions = {
  method: "GET",
  headers: customHeaders,
};

fetch(url, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // or response.text() for plain text
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
