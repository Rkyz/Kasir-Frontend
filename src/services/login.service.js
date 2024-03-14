import axios from "axios";

const apiUrl = import.meta.env.VITE_SOME_API;

export const postLogin = async (email, password) => {
    try {
        const response = await axios.post(
            `${apiUrl}/login`,
            { email, password } 
        );
        return response;
    } catch (error) {
        if (error.response) {
            throw error.response.data.message;
        }
        throw error; 
    }
};
