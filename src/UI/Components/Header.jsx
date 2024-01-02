import React, { useContext, useEffect, useState } from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { SidebarContext, CartContext } from '../../Infrastructure/Contexts';
import InteractiveRouterLink from './InteractiveRouterLink';
//import Logo from 'dist/logo.svg'
import { Logo } from '../assets/img'

export default function () {
    const [isActive, setIsActive] = useState(false)
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    })


    return (
        <header className={`${isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all`}>
            <div className='container mx-auto flex items-center justify-between h-full'>
                <InteractiveRouterLink as={Link} to={`/`} className=''>
                    <div>
                        <img src={Logo} alt="" className='w-[40px]' />
                    </div>
                </InteractiveRouterLink>
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='cursor-pointer flex relative'>
                    <BsBag className='text-2xl' />
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] h-[18px] w-[18px] text-white rounded-full flex justify-center items-center'>
                        {itemAmount}
                    </div>
                </div>
            </div>

        </header>
    )
};