import axios from "axios";

const AxiosBaseURL = axios.create({
    baseURL: 'https://safkat-live-server-side.vercel.app/'
})
const UseAxiosBaseURL = () => {
    return AxiosBaseURL
};

export default UseAxiosBaseURL