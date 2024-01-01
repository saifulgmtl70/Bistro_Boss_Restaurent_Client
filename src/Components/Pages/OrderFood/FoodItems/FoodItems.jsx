import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../../Hooks/useMenu";
import FoodCard from '../FoodCard/FoodCard';

const FoodItems = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const [menus] = UseMenu();

    const [currentPage, setCurrentPage] = useState(1);
    const menusPerPage = 12;


    // const offered = menus.filter(item => item.category === 'offered' );
    const dessarts = menus.filter(item => item.category === 'dessert' );
    const pizzas = menus.filter(item => item.category === 'pizza' );
    const salads = menus.filter(item => item.category === 'salad' );
    const soups = menus.filter(item => item.category === 'soup' );


// Logic to get rooms for the current page
const indexOfLastMenu = currentPage * menusPerPage;
const indexOfFirstMenu = indexOfLastMenu - menusPerPage;
const currentMenu = menus.slice(indexOfFirstMenu, indexOfLastMenu);

const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="w-full lg:w-4/12 mx-0 lg:mx-auto mb-10">
                        <Tab> All </Tab>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUP</Tab>
                        <Tab>DESSARTS</Tab>
                        
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {
                                currentMenu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>

                        {/* Pagination */}
                        <ul className="flex justify-center py-3 pb-12 space-x-2 mt-4">
                            {Array.from({ length: Math.ceil(menus.length / menusPerPage) }).map((_, index) => (
                                <li key={index}>
                                    <button className=" px-5 py-2 rounded bg-red-600 text-white focus:outline-none text-[20px]" onClick={() => paginate(index + 1)}>{index + 1}</button>
                                </li>
                            ))}
                        </ul>
                    </TabPanel>
                    
                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {
                                salads.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    

                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {
                                pizzas.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {
                                soups.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            {
                                dessarts.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>

                    

                </Tabs>
            </div>

          

        </div>
    );
};

export default FoodItems;