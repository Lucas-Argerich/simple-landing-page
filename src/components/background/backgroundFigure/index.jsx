import React from 'react'
import './index.scss'

export default function BackgroundFigure(props) {
    return (
        <div className='backgroundFigure'
            style={
                {
                    right: props.right,
                    left: props.left,
                    top: props.top,
                    bottom: props.bottom,
                    opacity: props.opacity
                }
            }
        />
    )
}
