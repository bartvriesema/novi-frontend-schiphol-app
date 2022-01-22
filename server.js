// Proxy server needed to circumvent CORS errors from React app
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

app.use(cors({
    origin: '*'
}))

app.get(':endpoint([\\/\\w\\.-]*)', (req, res) => {

    let endpoint = `${process.env.REACT_APP_API_BASE_URL}` + req.params.endpoint;
    let params = {};

    for (const [field, value] of Object.entries(req.query)) {
        params[field] = value;
    }

    axios.get(endpoint, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "app_id": `${process.env.REACT_APP_API_ID}`,
            "app_key": `${process.env.REACT_APP_API_KEY}`,
            "ResourceVersion": "v4",
        }, params: params
    }).then(response => {
        res.json(response.data);
    }).catch(error => {
        res.json(error);
    })
})

app.listen(5000, () => console.log('Server Started'))