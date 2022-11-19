import axios from "axios";

console.log(process.env);

export const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (url, option = {}) => {
    const res = await httpRequest.get(url, option);
    return res.data;
};
