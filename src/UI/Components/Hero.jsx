import React from 'react'
import InteractiveRouterLink from './InteractiveRouterLink'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <section className='bg-pink-200 h-[800px] background-bg-hero-svg bg-no-repeat bg-cover bg-center py-24'>
            <div className='container mx-auto flex justify-around h-full'>
                <div className='flex flex-col justify-center'>

                    <div className='font-semibold flex items-center uppercase'>
                        <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
                    </div>
                    <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
                        AUTUMN SALE STYLISH <br />
                        <span className='font-semibold'>WOMENS</span>
                    </h1>
                </div>

                <div className='hidden lg:block background-cover'>
                    
                </div>
            </div>
        </section>
    )
}

/**
 *   <InteractiveRouterLink as={Link} to={`/product/${id}`} visualText={"Go Home"}>
                    <img className='max-w-[80px]' src={image} alt='' />
                </InteractiveRouterLink>
 */