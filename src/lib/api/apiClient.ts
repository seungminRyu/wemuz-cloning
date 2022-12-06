import axios from "axios";

const host = process.env.REACT_APP_END_POINT;

const apiClient = axios.create({
    baseURL: host,
    withCredentials: process.env.REACT_APP_MODE === "deploy" ? true : false,
});
