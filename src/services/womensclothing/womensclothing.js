import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

export function womensClothingService() {

    return axios.get(`${API_BASE_URL}/categories_womensclothing`)

}