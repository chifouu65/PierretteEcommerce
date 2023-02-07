import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeItem, resetCart} from "../../redux/cartReducer";
import React from "react";
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {loadStripe} from "@stripe/stripe-js";
import {makeRequest} from "../../MakeReqest";

export default function Cart({open, setOpen}) {
    const products = useSelector((state) => state.cart.products);
    const [total, setTotal] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const calculateTotal = () => {
        let totalAmount = 0;
        let totalProductCount = 0;
        products.forEach((product) => {
            totalAmount += product.price * product.quantity
            totalProductCount += product.quantity
        });
        const totalMax = totalAmount.toFixed(2);
        setTotal(totalMax);
        setTotalQuantity(totalProductCount);
    };

    const stripePromise = loadStripe(
        'pk_test_51MXTDiIgdGykefkYdhgtuXJMlVX8T73Ny4Pn7oxhlmQzeDEuFDBNkr5a5fK6rHXhHoBp6juaUrCEFKizrAr678dw00UXa5s1ZS'
    );


    const handlePayment = async () => {
        setLoading(true);
        dispatch(resetCart());
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post('/orders', {
                products: products.map((product) => ({
                    id: product.id,
                    quantity: product.quantity,
                })),
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (error) {
            console.error(error);
            setError(error.message);
        } finally {
            setLoading(false);
            setError(null);
        }
    };

    React.useEffect(() => {
        calculateTotal();
    }, [products]);


    return (
        <>
            <Transition.Root show={open} as={Fragment}>
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
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
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
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Shopping
                                                        cart</Dialog.Title>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                            onClick={() => setOpen(false)}
                                                        >
                                                            <span className="sr-only">Close panel</span>
                                                            <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul className="-my-6 divide-y divide-gray-200">
                                                            {products.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div
                                                                        className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <img
                                                                            src={
                                                                                "http://31.220.61.192"  + product.img
                                                                            }
                                                                            alt={product.title}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div
                                                                                className="flex justify-between text-base font-medium text-gray-900">
                                                                                <div className="flex flex-col">
                                                                                    <h3>
                                                                                        {product.title}
                                                                                    </h3>
                                                                                    <p className="mt-1 text-sm text-gray-500">{
                                                                                        product.desc && product.desc.length > 50 ? product.desc.slice(0, 50) + "..." : product.desc
                                                                                    }</p>
                                                                                </div>
                                                                                <p className="ml-4">{
                                                                                    (product.price * product.quantity).toFixed(2)
                                                                                }€</p>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="flex flex-1 items-end justify-between text-sm items-center">
                                                                            <p className="text-gray-500">Quantity: {product.quantity}</p>
                                                                            <span
                                                                                className="text-gray-500 flex flex-row items-center gap-0.5 text-lg justify-center">
                                                                                <button
                                                                                    onClick={() => dispatch(removeItem({
                                                                                        id: product.id,
                                                                                        quantity: product.quantity
                                                                                    }))}
                                                                                >
                                                                                    <AiOutlineMinusCircle/>
                                                                                </button>
                                                                                <br/>
                                                                                <button onClick={() =>
                                                                                    dispatch(addToCart({
                                                                                            id: product.id,
                                                                                            quantity: 1
                                                                                        })
                                                                                    )
                                                                                }>
                                                                                    <AiOutlinePlusCircle/>
                                                                                </button>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className="flex justify-between text-base font-medium text-gray-500 px-8 pb-2">
                                                <p>Total Products</p>
                                                <p>{totalQuantity}x</p>
                                            </div>

                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div
                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Subtotal</p>
                                                    <p>{total}€</p>
                                                </div>

                                                <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes
                                                    calculated at checkout.</p>

                                                <div className="mt-6">
                                                    <button
                                                        onClick={() => dispatch(resetCart())}
                                                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                                    >
                                                        Reset
                                                    </button>
                                                </div>
                                                <div className="mt-6">
                                                    <button
                                                        onClick={handlePayment}
                                                        className={
                                                            isLoading ? 'bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'
                                                        }
                                                    >
                                                        {
                                                            isLoading ? <Spinner/> : "Checkout"
                                                        }
                                                    </button>
                                                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                                                </div>
                                                <div
                                                    className="mt-6 flex justify-center text-center text-sm text-gray-500">
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
