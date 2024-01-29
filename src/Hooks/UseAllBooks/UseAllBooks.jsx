import { useEffect, useState } from 'react';
import UseAxiosBaseURL from '../UseAxiosBaseURL/UseAxiosBaseURL';

const UseAllBooks = () => {
    const baseURL = UseAxiosBaseURL()
    const [allBooks, setAllBooks] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        baseURL.get('api/v1/addedBooks')
            .then(data => {
                setAllBooks(data.data)
                setIsLoading(false)
            })
    }, [baseURL])
    return [allBooks, isLoading]
};

export default UseAllBooks