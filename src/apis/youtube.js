import axios from 'axios';

const KEY = "AIzaSyCjYoWEhQFdV4rQHI_R3BnxwViZvGHF5mE";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
