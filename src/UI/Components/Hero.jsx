import React from 'react'
import InteractiveRouterLink from './InteractiveRouterLink'
import { Link } from 'react-router-dom'

export default function() {
  return (
    <section className='bg-pink-200 h-[800px]'>
        Hero
    </section>
  )
}

/**
 *   <InteractiveRouterLink as={Link} to={`/product/${id}`} visualText={"Go Home"}>
                    <img className='max-w-[80px]' src={image} alt='' />
                </InteractiveRouterLink>
 */