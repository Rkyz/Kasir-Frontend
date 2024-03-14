import axios from "axios";

const apiUrl =  import.meta.env.VITE_SOME_API;
const token = localStorage.getItem('token');
console.log(apiUrl)

export const getPelanggan = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/customer`, {
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

export const createPelanggan = async (data) => {
    try {
        const response = await axios.post(
            `${apiUrl}/customer/create`, 
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

export const editPelanggan = async (id, data) => {
    try {
        const response = await axios.put(
            `${apiUrl}/customer/edit/${id}`, 
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

export const deletePelanggan = async (id) => {
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
    try {
        const response = await axios.delete(
            `${apiUrl}/customer/delete/${id}`,
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
