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
import PrdActions from "../ProductAction/PrdActions";

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
        'pk_live_51MXTDiIgdGykefkYvvoeoddWnAhwVSshBIW9XxrwSu6TwXBrYzwrNxorJ3x8cxQSgJZXTGrOTBvPEjKfacytDt2T00UICPbaoB'
    );


    const handlePayment = async () => {
        setLoading(true);
        dispatch(resetCart());
        try {
            console.log(products);
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
                        enter="ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-300"
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
                                    enter="transform transition ease-in-out duration-300 sm:duration-300"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-300 sm:duration-300"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                            <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                <div className="flex items-start justify-between">
                                                    <Dialog.Title className="text-lg font-medium text-gray-900">Panier de produits</Dialog.Title>
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
                                                        <ul className="-my-6 divide-y divide-gray-200 ">
                                                            {
                                                                products.map((product) => (
                                                                    <>
                                                                        <PrdActions
                                                                            key={product.id}
                                                                            name={product.title}
                                                                            price={(product.price * product.quantity).toFixed(2)}
                                                                            quantity={product.quantity}
                                                                            img={
                                                                                "https://api.pierrette-essentielle.com/" + product.img
                                                                            }
                                                                            incr={
                                                                                () => dispatch(removeItem({
                                                                                    id: product.id,
                                                                                    quantity: product.quantity
                                                                                }))
                                                                            }
                                                                            decr={
                                                                                () =>
                                                                                    dispatch(addToCart({
                                                                                            id: product.id,
                                                                                            quantity: 1
                                                                                        })
                                                                                    )
                                                                            }
                                                                            remove={
                                                                                () => dispatch(resetCart({
                                                                                    id: product.id,
                                                                                    quantity: product.quantity
                                                                                }))
                                                                            }
                                                                        />

                                                                        <br/>
                                                                    </>

                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>


                                            <div
                                                className="flex justify-between text-base font-medium text-gray-500 px-8 pb-2">
                                                <p>Total de produits</p>
                                                <p>{totalQuantity}x</p>
                                            </div>

                                            <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div
                                                    className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Prix Total</p>
                                                    <p>{total}€</p>
                                                </div>

                                                <p className="mt-0.5 text-sm text-gray-500">
                                                    Taxes et frais de livraison calculés lors du paiement.
                                                    </p>

                                                <div className="mt-6">
                                                    <button
                                                        onClick={() => dispatch(resetCart())}
                                                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                                                    >
                                                        Vider le panier
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
                                                            Continuer vos achats
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
