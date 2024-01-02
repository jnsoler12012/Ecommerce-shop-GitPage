import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';

import { CartItem } from '.';
import { CartContext, SidebarContext } from '../../Infrastructure/Contexts';


export default function () {
    const { isOpen, handleClose } = useContext(SidebarContext)
    const { cart, cleanCart, total } = useContext(CartContext)

    console.log(cart)

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[41vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag (0)</div>
                <div
                    onClick={handleClose}
                    className='cursor-pointer w-8 h-8 flex justify-center items-center'>
                    <IoMdArrowForward className='text-2x1' />
                </div>
            </div>
            <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auot overflow-x-hidden border-b'>
                {cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
            </div>
            <div className='flex flex-col gap-y py-4 mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='uppercase font-semibold'>
                        <span className='mr-2'>Total:</span> $ {parseFloat(total).toFixed(2)}
                    </div>

                    <div
                        onClick={cleanCart}
                        className='cursor-pointer py-4 bg-red-500 text-white w-12 h-11 flex justify-center items-center text-xl'>
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div >
    )
};

