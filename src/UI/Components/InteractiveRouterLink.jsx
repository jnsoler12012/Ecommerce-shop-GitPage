import React from 'react'
import { Interactive } from 'react-interactive'

export default function ({ as, href, to, children, className }) {
    if (href)
        return (<Interactive as={as} href={href} className={className} >
            {children}
        </Interactive>)
    else
        return (<Interactive as={as} to={to} className={className} >
            {children}
        </Interactive>)

}