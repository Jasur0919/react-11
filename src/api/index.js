import axios from "axios";

const mainURL = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {
        'Content-type': 'Application/json'
    }
})

export default mainURL