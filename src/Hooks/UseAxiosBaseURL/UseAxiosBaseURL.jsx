import axios from "axios";

const AxiosBaseURL = axios.create({
    baseURL: 'http://localhost:5000/'
})
const UseAxiosBaseURL = () => {
    return AxiosBaseURL
};

export default UseAxiosBaseURL;