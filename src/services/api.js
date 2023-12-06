import axios from "axios";

const customAxios = axios.create({
    baseURL: 'http://localhost:8080/'
})
customAxios.interceptors.request.use(config => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account && account.token){
        config.headers.Authorization = `Bearer ${account.token}`;
    }
    return config;
})
export default customAxios;