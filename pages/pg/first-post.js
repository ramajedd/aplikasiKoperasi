import Head from 'next/head'
import Layout from '../../components/layout'
import Alert from '../../components/alert'
import React, { useState } from 'react';

export default function FirstPost() {
  const [status, setStatus] = useState(false);
  const warna = status?'success':'error';
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      How are you
      <Alert type={warna}>
        <div>hello</div>
        <button onClick={()=>setStatus(!status)}>klikme</button>
        
      </Alert>
      
    </Layout>
  )
}
