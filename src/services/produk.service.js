import axios from "axios";

const apiUrl =  import.meta.env.VITE_SOME_API;
console.log(apiUrl)

export const getProdukDataByID = async (productId) => {
  const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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
    const token = '1|mDlzYqiomum1YCS3MexEwlVKROLVJuyIrUJ9Jor8a84ade63';
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

