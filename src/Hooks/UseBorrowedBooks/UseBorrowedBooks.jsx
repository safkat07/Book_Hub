import { useContext } from 'react';
import UseAxiosBaseURL from '../UseAxiosBaseURL/UseAxiosBaseURL';
import { useQuery } from 'react-query';
import { AuthContext } from '../../Provider/AuthProvider';

const UseBorrowedBooks = () => {
    const { user } = useContext(AuthContext);
    const recentUserEmail = user?.email;
    const baseURL = UseAxiosBaseURL();
    const { refetch, data: borrowedBooks, isPending } = useQuery({
        queryKey: ['borrowedBooks'], // Fixed typo here
        queryFn: async () => {
            const response = await baseURL.get('api/v1/borrowedbooks');
            const filterData = response.data.filter(d => d?.status === 'borrowed' && d?.borrowedUserEmail === recentUserEmail); // Fixed property names and added strict equality
            return filterData;
        }
    });
    if (isPending) {
        return <p>Loading..........</p>;
    }

    return [borrowedBooks, refetch, isPending];
};

export default UseBorrowedBooks
