import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import {useSelector} from "react-redux";
import {removeItem} from "../../redux/cartReducer";
import React from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import {Link} from "react-router-dom";

export default function Cart({open, setOpen }) {
    const products = useSelector(state => state.cart.products)
    console.log(products)
    const [total, setTotal] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const calculateTotal = () => {
        let total = 0
        let totalQuantity = 0
        products.forEach(product => {
            total += product.price * product.quantity
            totalQuantity += product.quantity
        })
        setTotal(total)
        setTotalQuantity(totalQuantity)
    }
    React.useEffect(() => {
        calculateTotal()
    }, [products])

    return (
        <>
            <Transition.Root show={open} as={Fragment} >
                <Dialog as="div" className="relative z-50" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                            {products.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={
                                                                                "http://localhost:1337" + product.img
                                                                            }
                                                                            alt={product.title}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                <div className="flex flex-col">
                                                                                    <h3>
                                                                                        {product.title}
                                                                                    </h3>
                                                                                    <p className="mt-1 text-sm text-gray-500">{
                                                                                        product.desc.length > 50 ? product.desc.slice(0, 50) + "..." : product.desc
                                                                                    }</p>
                                                                                </div>
                                                                                <p className="ml-4">{product.price}€</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <p className="text-gray-500">Quantity: {product.quantity}</p>
                                                                            <span className="text-gray-500 flex flex-row items-center gap-2 text-lg">
                                                                                <button>
                                                                                    <AiOutlineMinusCircle />
                                                                                </button>
                                                                                <br/>
                                                                                <button>
                                                                                    <AiOutlinePlusCircle />
                                                                                </button>
                                                                            </span>
                                                                            <div className="flex">
                                                                                <button
                                                                                    onClick={
                                                                                        () => {
                                                                                            removeItem(product.id)
                                                                                        }
                                                                                    }
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>{total} €</p>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <a
                                                        href="#"
                                                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                    >
                                                        Checkout
                                                    </a>
                                                </div>
                                                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                    <p className={'flex flex-row items-center gap-2'}>
                                                        or
                                                        <Link to={'/products/1'}
                                                            type="button"
                                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            Continue Shopping
                                                            <span aria-hidden="true"> &rarr;</span>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
