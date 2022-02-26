import React, { useState, useEffect, useRef } from 'react'
import BackgroundFigure from './backgroundFigure'
import './index.scss'

export default function Background() {
    const [width, setWidth] = useState(window.innerWidth * 0.4)
    const ref = useRef(null)
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(ref.current.offsetWidth), false);
    }, [])

    return (
        <div className='background'>
            <BackgroundFigure ref={ref} right={-width * 0.1} top={-width * 0.2} opacity={0.35} />
            <BackgroundFigure left={-width * 0.6} top={400} opacity={0.3} />
            <BackgroundFigure left={0} top={800} opacity={0.2} />
            <BackgroundFigure right={-width * 0.55} top={1400} opacity={0.3} />
        </div>
    )
}