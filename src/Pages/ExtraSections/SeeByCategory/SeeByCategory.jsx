import { useState } from 'react';
import HeadingText from '../../../Components/Useable/HeadingText/HeadingText';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseAllBooks from '../../../Hooks/UseAllBooks/UseAllBooks';
import UseTabPanel from '../../../Hooks/UseTabPanel/UseTabPanel';

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
            <p className="text-center font-poppins my-2  w-1/2 m-auto" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam a ea sequi dolorum ipsam suscipit, sint repudiandae non aspernatur beatae!</p>
            <div className='font-poppins  flex justify-center items-center mt-5'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>All Books</Tab>
                        <Tab>Novel</Tab>
                        <Tab>Thriller</Tab>
                        <Tab>History</Tab>
                        <Tab>Drama</Tab>
                    </TabList>
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
                </Tabs>
            </div>
        </section>
    );
};

export default SeeByCategory;