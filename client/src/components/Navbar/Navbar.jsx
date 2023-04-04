import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {AiOutlineShoppingCart, AiOutlineUser} from "react-icons/ai";
import Cart from "../Cart/Cart";
import logo from '../../assets/logo.png'

function Navbar() {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const [isOpen, setIsOpen] = React.useState(false)
    const [selected, setSelected] = React.useState(0)

    const toggle = () => {
        if(window.innerWidth < 768) {
            if (isOpen) {
                setIsOpen(false)
            } else {
                setIsOpen(true)
            }
        } else {
            setIsOpen(false)
        }
        scrollTop()
    }

    const NavigationLinks = [
        {
            name: 'Accueil',
            url: '/',
            current: true
        },
        {
            name: 'Boutique',
            url: '/products',
            current: false
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
    ]

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
            <nav
                className="z-50 bg-white md:bg-opacity-60 px-2 sm:px-4 py-2.5
                     w-full fixed top-0 left-0 right-0
                     backdrop-filter backdrop-blur-lg
                     ">
                <div className="
                flex
                flex-wrap
                items-center
                justify-between
                md:justify-evenly
                 ">
                    <div className="flex items-center">
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
                    </div>
                    <div className="flex md:order-2 ">
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
                        <ul className="flex flex-col  p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
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
                        </ul>
                    </div>
                </div>
            </nav>
            </>
            {
                isOpen &&
                <div
                    onClick={toggle}
                    className="md:hidden
                h-full w-full bg-black fixed top-0 left-0 right-0 z-40 opacity-50
                "/>
            }
        </>
    )
}

export default Navbar