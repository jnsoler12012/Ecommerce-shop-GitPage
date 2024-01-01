import React from 'react'
import { Interactive } from 'react-interactive'

export default function ({ as, href, to, visualText }) {
    if (href)
        return (<Interactive as={as} href={href}>
            {visualText}
        </Interactive>)
    else
        return (<Interactive as={as} to={to}>
            {visualText}
        </Interactive>)

}