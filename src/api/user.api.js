import axios from "axios";

export const BASE_URL=import.meta.env.VITE_BASE_URL || 'http://localhost:8080/api'

const api=axios.create({baseURL:BASE_URL})

export default api