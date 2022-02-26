import React from 'react'
import ElipseFigure from './elipseFigure'
import robotImage from './assets/Image.png'

export default function RobotComponent() {
    return (
        <div style={{ position: "relative" }}>
            <img src={robotImage} alt="" draggable={false} style={{ userDrag: "none", userSelect: "none" }} />
            <ElipseFigure left={-80} top={40} rotate={-10} opacity={1} />
            <ElipseFigure left={20} top={350} rotate={40} opacity={0.3} scale={0.6} />
            <ElipseFigure left={20} top={-50} rotate={40} opacity={0.5} scale={0.9} />
            <ElipseFigure left={480} top={-40} rotate={38} opacity={0.2} scale={2.5} />
        </div>
    )
}
