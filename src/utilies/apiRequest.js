import axios from "axios"

export const getmethod = async(url) => {
    const data = await axios.get(url)
    return data;
}