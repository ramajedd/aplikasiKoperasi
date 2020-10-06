import Head from 'next/head'
//import styles from './layout.module.css'
//import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import test from './layout.module.css'
import React, { useState } from 'react';

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ mm, children }) {
  //console.log(mm); menghasilkan true
  //console.log(children);
  const [isShown, setIsShown] = useState(false);
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header >
        {mm ? (
          <>
            <img
              src="/images/profile.jpg"
  
              alt={name}
            />
            <h1 className="underline ...">{name} ini namaku</h1>
            <button className={`${test.btn} ${test.btn.blue}`}>test klik </button>
            <button
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                Hover over me!
            </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  
                  alt={name}
                />
              </a>
            </Link>
            <h2 >
              <Link href="/">
                <a >{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
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