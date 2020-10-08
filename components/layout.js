import Head from 'next/head'
import Link from 'next/link'
import Menu from './menu.js'
import React, { useState } from 'react';

const name = 'Your Name'
export const siteTitle = 'apkop'

export default function Layout({ beranda, children }) {
  //console.log(beranda); menghasilkan true
  //console.log(children);

  return (
    <div >
      
        <Menu/>
        <div>{children}</div>
        {!beranda && (
          <div >
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      
    </div>
  )
}