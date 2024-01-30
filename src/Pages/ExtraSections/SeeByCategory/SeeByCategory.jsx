import { useState } from 'react';
import HeadingText from '../../../Components/Useable/HeadingText/HeadingText';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseAllBooks from '../../../Hooks/UseAllBooks/UseAllBooks';
import UseTabPanel from '../../../Hooks/UseTabPanel/UseTabPanel';
import Loader from '../../../Components/Useable/Loader/Loader';

const SeeByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const [allBooks, isLoading] = UseAllBooks()
    const Novel = allBooks.filter(category => category.bookCategory == 'Novel')
    const Thriller = allBooks.filter(category => category.bookCategory == 'Thriller')
    const History = allBooks.filter(category => category.bookCategory == 'History')
    const Drama = allBooks.filter(category => category.bookCategory == 'Drama')
    return (
        <section className='my-16'>
            <HeadingText headText={"Popular Books"}></HeadingText>
            <p className="text-center font-poppins my-2 px-5 md:w-1/2 m-auto" >Discover bestselling and timeless literary treasures in our popular books section – where every page turns into an unforgettable journey</p>
            <div className='font-poppins  mt-5'>
                <div className=''>
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                        <TabList className="text-center ">
                            <Tab>All Books</Tab>
                            <Tab>Novel</Tab>
                            <Tab>Thriller</Tab>
                            <Tab>History</Tab>
                            <Tab>Drama</Tab>
                        </TabList>
                        {isLoading ? (

                            <div className='flex justify-center my-20 items-center'>
                                <Loader></Loader>
                            </div>
                        ) : (
                            <>
                                <TabPanel>
                                    <UseTabPanel category={allBooks}></UseTabPanel>
                                </TabPanel>
                                <TabPanel>
                                    <UseTabPanel category={Novel}></UseTabPanel>
                                </TabPanel>
                                <TabPanel>
                                    <UseTabPanel category={Thriller}></UseTabPanel>
                                </TabPanel>
                                <TabPanel>
                                    <UseTabPanel category={History}></UseTabPanel>
                                </TabPanel>
                                <TabPanel>
                                    <UseTabPanel category={Drama}></UseTabPanel>
                                </TabPanel>
                            </>
                        )}
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default SeeByCategory;