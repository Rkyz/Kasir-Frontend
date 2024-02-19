import axios from "axios";

const apiUrl =  import.meta.env.VITE_SOME_API;
console.log(apiUrl)

export const createPelanggan = async (data) => {
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
    try {
        const response = await axios.post(
            `${apiUrl}/buying/create`, 
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
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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

