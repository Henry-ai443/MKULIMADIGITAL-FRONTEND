import React from "react";
import WelcomeBanner from "./WelcomeBanner";
import QuickStats from "./QuickStats";
import ReccomendedProducts from "./ReccomendedProducts";
import RecentOrders from "./RecentOrders";
import SpendingAnalytics from "./SpendingAnalytics";
import OrderCategories from "./OrderCategories";
 const CustomerDashboard = () =>{
    return(
        <>
           <WelcomeBanner/>
            <QuickStats/>
            <ReccomendedProducts/>
           <RecentOrders/>
           <SpendingAnalytics/>
           <OrderCategories/>
        </>
    );
 }

 export default CustomerDashboard