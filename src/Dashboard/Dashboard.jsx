
import { Helmet } from 'react-helmet-async';
import { Outlet } from "react-router-dom";


import './Dashboard.css';
import SideBar from './SideBar/SideBar';
import Dashboardview from './Dashbordview/Dashbordview';


const DashBoard = () => {



    return (
        <div className="flex">
             <Helmet>
                <title>Bistro Boss | User Dashboard </title>
                
            </Helmet>
            <div className=" basis-[18%]">
                <SideBar></SideBar>
            </div>
            <div className="basis-[82%] h-[100vh] bg-[#F6F6F6] overflow-y-scroll">
                <Dashboardview />
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;