import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const param = {
    part: 'snippet,id',
    maxResults: '50',
    order: 'date'
}

const options = {
    method: 'GET',
    params: param,
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};


export const fetchData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}