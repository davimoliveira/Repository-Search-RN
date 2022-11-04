import axios from "axios";

const defaultOptions = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
};

const api = axios.create({
    baseURL: "https://api.github.com/"
});

export const PostApi = (URL, data) => {
    return api.post(URL, JSON.stringify(dados), defaultOptions);
};

export const GetApi = URL => {
    return api.get(URL, defaultOptions);
};