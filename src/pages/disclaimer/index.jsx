import React from 'react'
import { ReactComponent as AttentionIcon } from './asstes/noun-attention-2960519.svg'
import { ReactComponent as LinkedInIcon } from './asstes/logotipo-de-linkedin.svg'
import { ReactComponent as GithubIcon } from './asstes/signo-de-github.svg'
import './index.scss'
export default function Disclaimer() {
  return (
    <main className='disclaimerMain'>
      <AttentionIcon width={100} height={100} style={{ backdropFilter: "blur(30px)", opacity: 0.8 }} />
      <h2>This is a <span>landing page model</span>, no real services or information is shown here. </h2>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/lucas-argerich/' target="_blank"><LinkedInIcon width={60} height={60} /></a>
        <a href='https://github.com/Lucas-Argerich' target="_blank"><GithubIcon width={60} height={60} /></a>
      </div>
    </main>
  )
}
