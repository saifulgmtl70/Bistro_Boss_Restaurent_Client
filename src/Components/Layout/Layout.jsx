import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import { Header } from "../Pages/Header/Header";

import './Layout.css'


const Layout = () => {

    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;
   

    return (
        <div className="main_font">
            { noHeaderFooter || <Header></Header> }
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Layout;