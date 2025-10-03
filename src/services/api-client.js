import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://e-commerce-azure-zeta.vercel.app/api/v1",
});

export default apiClient;