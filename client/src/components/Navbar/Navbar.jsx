import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";
import UserPopUp from "../UserPopUp/UserPopUp";
import Cart from "../Cart/Cart";
function Navbar() {

    const [isOpen, setIsOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    const toggle = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    const NavigationLinks = [
        {
            name: 'Home',
            url: '/',
            current: true
        },
        {
            name: 'About',
            url: '/about',
            current: false
        },
        {
            name: 'Produits Pierrette',
            url: '/products/1',
            current: false
        },
        {
            name: 'Astrologie',
            url: '/products/2',
            current: false
        },
    ]

    const selectStyle = 'flex flex-row justify-center items-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
    const linkStyle = "flex flex-row justify-center items-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"

    const [isOpenUser, setIsOpenUser] = React.useState(false)
    const toggleUserPopUp = () => {
        if (isOpenUser) {
            setIsOpenUser(false)
        } else {
            setIsOpenUser(true)
        }
    }

    const [open, setOpen] = useState(false)
    const toggleCart = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
            toggle()
        }
    }

    return (
        <>
            <>
                <Cart open={open} setOpen={toggleCart}/>
            </>
            <>
                {
                    isOpenUser && (
                        <UserPopUp toggleUserPopUp={toggleUserPopUp} />
                    )
                }
            </>
        <nav
            className="z-50 bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 absolute w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <Link to={'/'} className="flex items-center">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                            Pierrette
                        </h2>
                </Link>
                <div className="flex md:order-2">
                    <button
                        onClick={toggleUserPopUp}
                        type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Login
                    </button>
                    <button
                        onClick={toggle}
                        data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div className={
                    isOpen ? "items-center justify-between w-full md:flex md:w-auto md:order-1" : "md:flex md:w-auto md:order-1 hidden"
                }
                     id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            NavigationLinks.map((link, index) => (
                                <li key={index} onClick={
                                    toggle
                                }>
                                    <Link to={link.url}
                                            className={selected === index ? selectStyle : linkStyle}
                                            onClick={() => setSelected(index)}>
                                        {link.name}
                                        {
                                            link.icon ? <link.icon className="inline-block ml-2"/> : null
                                        }
                                    </Link>
                                </li>
                            ))
                        }
                        <li className="flex flex-row justify-center items-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <button
                                onClick={() => {
                                    toggleCart()
                                    }
                                } className="inline-block ml-2 flex flex-row items-center gap-2">
                                <AiOutlineShoppingCart /> Cart
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar