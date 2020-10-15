import Link from 'next/link'
import Menu from './menu.js'
import React, { useState } from 'react';

export const siteTitle = 'apkop'

export default function Layout({ home, children }) {
  return (
    <div >
      
        <Menu/>
        <div>{children}</div>
        {!home && (
          <div >
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      
    </div>
  )
}