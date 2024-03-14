import axios from "axios";

const apiUrl =  import.meta.env.VITE_SOME_API;
console.log(apiUrl)
const token = localStorage.getItem('token');

export const getProdukDataByID = async (productId) => {
  try {
      const response = await axios.get(
          `${apiUrl}/product/${productId}`, {
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

export const getProdukData = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/product`, {
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

export const createProduk = async (data) => {
    try {
        const response = await axios.post(
            `${apiUrl}/product/create`, 
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

export const editProduk = async (id, data) => {
    try {
        const response = await axios.put(
            `${apiUrl}/product/edit/${id}`, 
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

export const deleteProduk = async (id) => {
    try {
        const response = await axios.delete(
            `${apiUrl}/product/delete/${id}`,
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

