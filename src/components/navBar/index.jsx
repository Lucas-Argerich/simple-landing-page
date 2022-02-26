import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './assets/logo.svg'
import './index.scss'
import Button from '../buttonComponent'

export default function NavBar() {
  return (
    <nav>
      <Link to={'simple-landing-page/'}><Logo /></Link>
      <ul>
        <li><Link to={'simple-landing-page/'}>Home</Link></li>
        <li><Link to={'simple-landing-page/disclaimer'}>Services</Link></li>
        <li><Link to={'simple-landing-page/disclaimer'}>About us</Link></li>
        <li><Link to={'simple-landing-page/disclaimer'}>Contact us</Link></li>
      </ul>
      <Button text={"Sign up"}/>
    </nav>
  )
}
