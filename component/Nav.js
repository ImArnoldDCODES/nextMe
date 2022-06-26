import React from 'react'
import NavStyles from '../styles/Nav.module.css'
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={NavStyles.nav}>
        <ul>
            <li>
             <Link href='./'>Home</Link>
            </li>
            <li>
             <Link href='./about'>About</Link>
            </li>
        </ul>
    </div>
  )
}
