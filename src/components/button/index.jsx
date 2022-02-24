import React from 'react'
import './index.scss'

export default function Button(props) {
  return (
    <>
        <button type='button' className='buttonComponent'>{props.text}</button>
    </>
  )
}
