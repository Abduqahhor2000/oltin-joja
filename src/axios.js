import axios from "axios";

export const baseURL = process.env.BASE_URL;

export const https = axios.create({

  baseURL: baseURL,

});
