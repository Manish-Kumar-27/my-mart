import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_URL;

export function wishlistService() {

    return axios.get(`${API_BASE_URL}/wishList`)
}