import axios from "axios";

export const API_URL = 'https://api.datamuse.com';


export const Api = {
    fetchData: async (value) => {
        const { data } = await axios.get(`${API_URL}/words?rel_rhy=${value}`);
        return data;
    }
}