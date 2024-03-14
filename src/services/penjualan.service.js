import axios from "axios";

const apiUrl =  import.meta.env.VITE_SOME_API;
console.log(apiUrl)
const token = localStorage.getItem('token');


export const createPelanggan = async (data) => {
    try {
        const response = await axios.post(
            `https://8000.rioalamsyah.my.id/api/buying/create`, 
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            throw error.response.data.message;
        }
    }
};  

export const getAllDetail = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/detail`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return response;
    } catch (error) {
        if (error.response) {
            throw error.response.data.message;
        }
    }
};  
export const searchDetail = async (id) => {
    try {
        const response = await axios.get(
            `${apiUrl}/detail/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return response;
    } catch (error) {
        if (error.response) {
            throw error.response.data.message;
        }
    }
};  

