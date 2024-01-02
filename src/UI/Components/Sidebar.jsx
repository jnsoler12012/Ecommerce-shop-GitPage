import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import { CartItem } from '.';
import { CartContext, SidebarContext } from '../../Infrastructure/Contexts';
import InteractiveRouterLink from './InteractiveRouterLink'
import { useHistory } from 'react-router-dom';


export default function () {
    const { isOpen, handleClose } = useContext(SidebarContext)
    const { cart, cleanCart, total, itemAmount } = useContext(CartContext)
    const [stateShowCheckout, setStateShowCheckout] = useState("hidden")

    const history = useHistory();

    useEffect(() => {
        const unlisten = history.listen(() => {
            setStateShowCheckout("hidden")
            handleClose()
        });

        return () => {
            unlisten();
        };
    }, [history]);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 shadow-2xl md:w-[41vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] flex flex-col flex-nowrap h-[100vh]`}>

            <main className={`${stateShowCheckout} flex z-[30] flex-col justify-center items-center bg-[#1A2238] h-[100vh] w-[100vw] absolute top-[-6px] right-0 transition-all duration-300 delay-100`}>
                <div className="bg-[#FF6A3D] text-white px-2 text-[2rem] rounded rotate-12 absolute mb-[12rem] font-medium">
                    Thanks for triying the buying process!!
                </div>
                <button className="mt-5">
                    <div
                        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <InteractiveRouterLink as={Link} to={"/"}>
                                Go Home
                            </InteractiveRouterLink>
                        </span>
                    </div>
                </button>
            </main>




            <div className='flex items-center justify-between py-6 border-b h-[9%]'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount})</div>
                <div
                    onClick={handleClose}
                    className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2x1' />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 overflow-y-auot overflow-x-hidden border-b min-h-[54%] h-[65%]'>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            <div className='flex flex-col gap-y py-4 mt-4 w-[89%] lg:w-[87%] absolute bottom-0 h-auto'>
                <div className='flex w-full justify-between items-center mt-[1%] mb-[1%] mr-[2%] ml-[2%] bg-white'>
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
                    </div>

                    <div
                        onClick={cleanCart}
                        className='cursor-pointer py-4 bg-red-500 text-white w-12 h-11 flex justify-center items-center text-xl'>
                        <FiTrash2 />
                    </div>
                </div>
                <InteractiveRouterLink as={Link} to={`/`} className='bg-gray-200 flex p-4 justify-center items-start text-primary w-full font-medium mt-[1%] mb-[1%] mr-[2%] ml-[2%]'>
                    View cart
                </InteractiveRouterLink>
                <button onClick={() => setStateShowCheckout('block transform translate-y-1 transition-all')} className='bg-primary flex p-4 justify-center items-start text-white w-full font-medium m-[2%]'>
                    Checkout
                </button>

            </div>
        </div >
    )


};

