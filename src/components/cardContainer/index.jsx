import React from 'react'
import './index.scss'

export default function CardContainer({ children }) {
    return (
        <div className='cardContainer'>
            {children}
        </div>
    )
}