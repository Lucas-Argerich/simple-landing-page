import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './logo.svg'
import './index.scss'

export default function NavBar() {
  return (
    <nav>
      <Link to={'/'}><Logo /></Link>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/disclaimer'}>Services</Link></li>
        <li><Link to={'/disclaimer'}>About us</Link></li>
        <li><Link to={'/disclaimer'}>Contact us</Link></li>
      </ul>
      <p>sign up</p>
    </nav>
  )
}
