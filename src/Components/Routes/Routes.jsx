import {
    createBrowserRouter,

} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import Contact from "../Pages/Contact/Contact";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Menu from "../Pages/Menu/Menu";
import OrderFood from "../Pages/OrderFood/OrderFood";
import DashBoard from "../../Dashboard/Dashboard";
import MyCart from "../../Dashboard/UserDashboard/Mycart";
import UserHome from "../../Dashboard/UserDashboard/UserHome";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../../Dashboard/AdminDashboard/AdminHome";
import AllUsers from "../../Dashboard/AdminDashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../../Dashboard/AdminDashboard/AddItems";
import ManageItem from "../../Dashboard/AdminDashboard/ManageItem";
import ManageBookings from "../../Dashboard/AdminDashboard/ManageBookings";
import UpdateItem from "../../Dashboard/AdminDashboard/UpdateItem";
import Reservation from "../../Dashboard/UserDashboard/Reservation";
import Payment from "../../Dashboard/UserDashboard/CheckAOut/Payment";
import PaymentHistory from "../../Dashboard/UserDashboard/PaymentHistory";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },

        {
            path: '/login',
            element: <Login></Login>
        },

        {
            path: '/signup',
            element: <SignUp></SignUp>
        },

        {
            path: '/menu',
            element: <Menu></Menu>
        },

        {
            path: '/shop',
            element: <OrderFood></OrderFood>
        },
        
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        
        
      ]
    },


    {
      path: 'dashboard',
      element: <PrivateRoute> <DashBoard></DashBoard> </PrivateRoute>,
      children: [
        {
          path: 'userhome',
          element: <UserHome></UserHome>
        },
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        },
        {
          path: 'reservation',
          element: <Reservation></Reservation>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        },


        // Admin's Routes
        {
          path: 'adminhome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'additems',
          element: <AdminRoute> <AddItems></AddItems> </AdminRoute>
        },
        {
          path: 'manageitems',
          element: <AdminRoute> <ManageItem></ManageItem> </AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute> <UpdateItem></UpdateItem> </AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-restaurent-server-indol.vercel.app/menu/${params.id}`)
        },
        {
          path: 'managebookings',
          element: <AdminRoute> <ManageBookings></ManageBookings> </AdminRoute>
        },
        {
          path: 'allusers',
          element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
        }
        
      ]
    }

   

  ]);