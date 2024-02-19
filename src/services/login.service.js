import axios from "axios";

const apiUrl =  import.meta.env.VITE_SOME_API;
console.log(apiUrl)

export const getPelanggan = async () => {
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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