// Proxy server needed to circumvent CORS errors from React app
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: `${process.env.REACT_APP_API_CORS_ALLOWED}`
  })
);

app.get("/", (req, res) => {
  res.send("Proxy server is running");
});

app.get("/weather", (req, res) => {
  axios
    .get(
      `${process.env.REACT_APP_WEATHER_API_URL}${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get("/novi/:endpoint([\\/\\w\\.-]*)", (req, res) => {
  let endpoint =
    `${process.env.REACT_APP_NOVI_BACKEND_API_BASE_URL}` + req.params.endpoint;

  axios
    .get(endpoint)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.get("/schiphol/:endpoint([\\/\\w\\.-]*)", (req, res) => {
  let endpoint = `${process.env.REACT_APP_API_BASE_URL}` + req.params.endpoint;
  let params = {};

  for (const [field, value] of Object.entries(req.query)) {
    params[field] = value;
  }

  axios
    .get(endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        app_id: `${process.env.REACT_APP_API_ID}`,
        app_key: `${process.env.REACT_APP_API_KEY}`,
        ResourceVersion: "v4"
      },
      params: params
    })
    .then((response) => {
      // Both the data and headers contain information that needs to be returned
      const flights = response.data;
      const headers = response.headers; //The header contains information about the next and previous page
      const data = { ...flights, ...headers };
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});

app.listen(5000, () => console.log("Server Started"));
