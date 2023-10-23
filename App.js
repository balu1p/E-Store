import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./src/components/Home/Header";
import Body from "./src/components/Home/Body";
import Footer from "./src/components/Home/Footer";
import AddProduct from "./src/components/Home/AddProduct";
import { DataProvider } from "./src/components/utils/DataContext";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Info from "./src/components/Home/Info";

const AppLayout = () => {
    return (
        <div>
        
        <DataProvider>
        <Header/>
        <Outlet/>
        <Footer/>
        </DataProvider>
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        
        children: [
            {
                path: '/', 
                element: <Body/>,
            },
            {
                path: '/addproduct',
                element: <AddProduct/>,
            },
            {
                path: '/product/:id',
                element: <Info/>
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);