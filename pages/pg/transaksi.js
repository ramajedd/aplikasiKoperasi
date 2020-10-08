import Head from 'next/head'
import Card from '../../components/card'
import Layout from '../../components/layout'
//import React, { useState } from 'react';

export default function Transaksi() {
 // const [status, setStatus] = useState(false);
  //const warna = status?'success':'error';
  return (
    <Layout>
            <Card
    data ={"hi"}
    deskripsi={" ini adalah halaman transksi"}
    />
    </Layout>
    

  )
}
