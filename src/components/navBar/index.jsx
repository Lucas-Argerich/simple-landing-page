import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import './index.scss'
import Button from '../buttonComponent'

export default function NavBar() {

  const [navState, setNavState] = useState(false)

  function toggleNav() {
    setNavState(!navState)
  }

  return (
    <nav>
      <MediaQuery maxWidth={768}>
        <div className='topNavSection'>
          <Link to={'simple-landing-page/'}><Logo /></Link>
          <ArrowIcon style={{ filter: "invert()", transform: navState?"rotate(270deg)":"rotate(90deg)", transition:"200ms" }} onClick={() => toggleNav()} />
        </div>
        {navState &&
          <div className='deployedNav'>
            <Link to={'simple-landing-page/'}>Home</Link>
            <Link to={'simple-landing-page/disclaimer'}>Services</Link>
            <Link to={'simple-landing-page/disclaimer'}>About us</Link>
            <Link to={'simple-landing-page/disclaimer'}>Contact us</Link>
            <Button text={"Sign up"} />
          </div>
        }
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <Link to={'simple-landing-page/'}><Logo /></Link>
        <ul>
          <li><Link to={'simple-landing-page/'}>Home</Link></li>
          <li><Link to={'simple-landing-page/disclaimer'}>Services</Link></li>
          <li><Link to={'simple-landing-page/disclaimer'}>About us</Link></li>
          <li><Link to={'simple-landing-page/disclaimer'}>Contact us</Link></li>
        </ul>
        <Button text={"Sign up"} />
      </MediaQuery>
    </nav>
  )
}
