import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import UserPopUp from "../UserPopUp/UserPopUp";
import Cart from "../Cart/Cart";
import logo from '../../assets/logo.png'
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
            name: 'Accueil',
            url: '/',
            current: true
        },
        {
            name: 'A propos',
            url: '/about',
            current: false
        },
        {
            name: 'Contact',
            url: '/contact',
            current: false
        },
        {
            name: 'Boutique',
            url: '/products/2',
            current: false
        },
    ]

    React.useEffect(() => {
        if(isOpen) {
            setTimeout(() => {
                setIsOpen(false)
            } , 10000)
        }
    }, [isOpen])


    const selectStyle = 'flex flex-row justify-center items-center py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
    const linkStyle = "flex flex-row justify-center items-center py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "

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
                        <UserPopUp toggleUserPopUp={toggleUserPopUp}/>
                    )
                }
            </>
            <nav
                className="z-50 bg-white px-2 sm:px-4 py-2.5  w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to={'/'} className="flex items-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-10 h-10"
                        />
                        <h2 className="lg:hidden block text-base font-bold text-gray-800">
                            Pierrette
                        </h2>
                        <h2 className="hidden lg:block text-lg font-bold text-gray-800">
                            Pierrette Essentielle
                        </h2>
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            onClick={toggle}
                            data-collapse-toggle="navbar-sticky" type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
                        <ul className="flex flex-col  p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
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
                            <li className={
                                linkStyle
                            }>
                                <button
                                    onClick={() => {
                                        toggleCart()
                                    }
                                    }
                                    className="flex flex-row justify-center items-center gap-2"
                                >
                                    <AiOutlineShoppingCart/> Panier
                                </button>
                            </li>
                            <li className={
                                linkStyle
                            }>
                                <button
                                    onClick={toggleUserPopUp}
                                    className="flex flex-row justify-center items-center gap-2"
                                >
                                    <AiOutlineUser/> Profil
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