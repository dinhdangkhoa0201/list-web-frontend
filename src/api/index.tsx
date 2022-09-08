import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {config} from "../config";

// const navigate = useNavigate();

const httpClient = axios.create({
    baseURL: config.apiIp,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 5000,
});

// Add a request interceptor
httpClient.interceptors.request.use(function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
httpClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // const status = response.status;
    //
    // switch (status) {
    //     case 401:
    //         navigate("/unauthorized");
    //         break
    //     case 403:
    //         navigate("/forbidden");
    //         break
    //     case 404:
    //         navigate("/not-found");
    //         break;
    // }

    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default httpClient;
