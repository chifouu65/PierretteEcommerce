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
import Succes from "./pages/ValidationPayement/Succes";
import Error from "./pages/ValidationPayement/Error";
import ErrorPage from "./pages/Error/ErrorPage";
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
                path: '/success=true',
                element: <Succes/>
            },
            {
                path: '/success=false',
                element: <Error/>
            },
            {
                path: '*',
                element: <ErrorPage/>
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
