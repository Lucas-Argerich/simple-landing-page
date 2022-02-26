import React from 'react'
import './index.scss'

export default function CardComponent({ children }) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}