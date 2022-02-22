import React, { useState, useEffect, useRef } from 'react'
import './index.scss'

export default function Background() {
    const [width, setWidth] = useState(window.innerWidth * 0.4)
    const ref = useRef(null)
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(ref.current.offsetWidth), false);
    },[])


    return (
        <div className='background'>
            <div ref={ref} className='backgroundFigure'
                style={
                    {
                        right: -width * 0.1,
                        top: -width * 0.2,
                        opacity: 0.35
                    }
                }
            />
            <div className='backgroundFigure'
                style={
                    {
                        left: -width * 0.6,
                        top: 400,
                        opacity: 0.3
                    }
                }
            />
            <div className='backgroundFigure'
                style={
                    {
                        left: 0,
                        top: 800,
                        opacity: 0.2
                    }
                }
            />
            <div className='backgroundFigure'
                style={
                    {
                        right: -width * 0.55,
                        top: 1400,
                        opacity: 0.3
                    }
                }
            />


        </div>
    )
}
