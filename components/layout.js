import Head from 'next/head'
import Link from 'next/link'
import Menu from './menu.js'
import React, { useState } from 'react';

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ mm, children }) {
  //console.log(mm); menghasilkan true
  //console.log(children);
  const [isShown, setIsShown] = useState(false);
  return (
    <div >
      
        <Menu/>
        <div>{children}</div>
        {!mm && (
          <div >
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      
    </div>
  )
}