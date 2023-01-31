import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import './App.css';
const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            },
            {
                path: '/product/:id',
                element: <Product/>
            },
            {
                path: '*',
                element: <div>404</div>
            }
        ]
    },
])


function App() {
    return (
        <div className='h-full w-full min-h-screen min-w-screen'>
        <br/><br/><br/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
