const axios = require("axios");

const BASE_URL = "http://localhost:5000";

const publicRequest = axios.create({
    baseURL: BASE_URL
});

module.exports = publicRequest;