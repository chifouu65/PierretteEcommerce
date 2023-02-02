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
import About from "./pages/About/About";
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
                path: '/products/:id',
                element: <Products/>
            },
            {
                path: '/product/:id',
                element: <Product/>
            },
            {
                path: '/about',
                element: <About/>
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
        <div>
        <br/><br/><br/>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
