import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

export function productsService() {

    return axios.get(`${API_BASE_URL}/products`)
}