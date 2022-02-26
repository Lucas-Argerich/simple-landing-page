import React from 'react'
import './index.scss'

export default function ButtonComponent(props) {
  return (
    <>
        <button type='button' className='buttonComponent'>{props.text}</button>
    </>
  )
}
